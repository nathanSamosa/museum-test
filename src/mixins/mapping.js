import _ from 'lodash';

export default {
    data() {
        return {
            spaceHighlightsMapping: {
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
                    "_value": "path"
                }
            },
            spacePartnersMapping: {
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
            const formattedHighlights = [];
            highlights.forEach(highlight => {
                const isPartner = _.has(highlight, 'partner')
                const keyMap = isPartner ? this.spacePartnersMapping[highlight.partner] : this.spaceHighlightsMapping;
                
                const mappedHighlight = this.mapKeys(highlight, highlight, keyMap, null)
                const widgets = Object.values(mappedHighlight).filter(key => key.length) //isolate widget arrays from obj
                const highlightNoWidgets = Object.values(mappedHighlight).filter(key => !key.length) //filter widget arrays from obj
                let formattedHighlight = { ...this.defaultObj(highlightNoWidgets), widgets: this.defaultWidgets(widgets)} //default obj by one level, and reattach widgets
                formattedHighlights.push(formattedHighlight)
            })
            return formattedHighlights
        },
        mapKeys(base, obj = {}, keyMap, keyMapPrev = {}) {
            return Object.keys(keyMap).map(key => {
                const path = keyMap[key];
                const isObject = typeof(path) === "object"

                if (isObject) {
                    if (!base[key]) return { [path]: null }
                    return this.mapKeys(base, obj[key], path, keyMap)
                } else {
                    const customString = _.startsWith(key, '$') ? key.substring(1) : null
                    const pathParent = _.startsWith(key, '_') ? base[_.findKey(keyMapPrev, function(o) { return o === keyMap })] : null
                    let value =  obj[key] || customString || pathParent
                    return { [path]: value }
                }
            })
        },
        defaultObj(obj) {
            let defaultObj = {}
            Object.values(obj).map(obj => {
                defaultObj = { ...defaultObj, [Object.keys(obj)[0]]:Object.values(obj)[0] }
            })
            return defaultObj
        },
        defaultWidgets(widgets) {
            const arr = []
            widgets.forEach(widget => {
                arr.push(Object.assign({}, ...widget))
            })
            return arr
        }
    }
}