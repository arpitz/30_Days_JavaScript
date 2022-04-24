Document.prototype.myQuerySelectorAll = function(selector) {
    const nodesList = [];
    function traverse(node) {
        if(node === null) {
            return;
        }
        if(isMatch(node, selector)) {
            nodesList.push(node);
        }
        for(const child of node.children) {
            traverse(child);
        }
    }
    traverse(this.documentElement);
    return nodesList;
}

function isMatch(node, selector) {
    if(node.matches) {
        return node.matches(selector);
    }
    else {
        const matches = Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.webkitMatchesSelector ||
        Element.prototype.oMatchesSelector;

        return matches.call(node, selector);
    }
}