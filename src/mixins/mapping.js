import _ from 'lodash';

export default {
    data() {
        return {
            //imported data depending on the route of the TopicPage
            museumMapping: {
                "id": "id",
                "image": "image",
                "name": "title",
                "description": "desc",
                "date": "date",
                "news": {
                    "$textWidget": "type",
                    "$Latest news:": "title",
                    "title": "text",
                    "date": "date"
                },
                "quiz": {
                    "$linkWidget": "type",
                    "$Take a quiz!": "text",
                    "_": "path"
                }
            },
            partnerMapping: {
                observatory: {
                    "image": "image",
                    "name": "title",
                    "info": "desc",
                    "createdAt": "date",
                    "partner": "partner"
                },
            },        
        }
    },
    methods: {
        formatHighlights(highlights) {
            return highlights.map(highlight => {
                const mappedHighlight = this.mapHighlight(highlight) // First, reformat the highlight's values to generic keys
                const onlyWidgets = this.filterForArray(mappedHighlight, true) // Isolate the widgets from the rest of the card
                const onlyContent = this.filterForArray(mappedHighlight, false)
                const formattedHighlight = { // Rejoin the widgets to the card in their own array
                    ...this.mergeObj(onlyContent),
                    widgets: onlyWidgets.map(widget => this.mergeObj(widget))
                }
                return formattedHighlight
            })
        },
        mapHighlight(highlight) {
            const isPartner = _.has(highlight, 'partner')
            const keyMap = isPartner ? this.partnerMapping[highlight.partner] : this.museumMapping;
            return this.mapKeys(highlight, highlight, keyMap, null)
        },
        mapKeys(base, obj = {}, keyMap, keyMapPrev = {}) {
            return Object.keys(keyMap).map(key => {
                const path = keyMap[key];

                if (_.isObject(path)) { //If a deeper level exists on the highlight, repeat
                    return base[key] ? this.mapKeys(base, obj[key], path, keyMap) : { [key]: null }
                }
                
                const mappedValue = (key) => { //If this is the final level, dermine the format of the key
                    if (_.startsWith(key, '$')) return this.removeFirstChar(key)
                    if (_.startsWith(key, '_')) return base[this.findKey(keyMapPrev, keyMap)]
                    return obj[key]
                }

                return { [path]: mappedValue(key) }
            })
        },
        mergeObj(obj) {
            return Object.assign({}, ...obj) //merge an array of single-prop objects into a single object
        },
        removeFirstChar(str) {
            return str.substring(1)
        },
        findKey(obj, value) {
            return _.findKey(obj, e => e === value)
        },
        filterForArray(obj, includeArr) {
            return Object.values(obj).filter(val => includeArr ? val.length : !val.length)
        }
    }
}