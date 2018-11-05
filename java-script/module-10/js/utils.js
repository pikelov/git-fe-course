'use strict';

/**
 *
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope=document] optional scope element for selector
 * @returns {(Element| null)} DOM element or null
 */
function $qs(selector, scope = document) {
    return scope.querySelector(selector);
}

/**
 *
 *
 * @param {string} selector
 * @param {Element} [scope=document] optional scope element for selector
 * @returns {(Elements|null)} DOM elements or null
 */
function $qsa(selector, scope = document) {
    return scope.querySelectorAll(selector);
}

/**
 *
 *
 * @param {string} tag node type
 * @param {object} [props={}] node attributes
 * @param {string} text content
 * @returns {object} DOM element
 */
function $cel (tag, props = {}, text) {
    const elem = document.createElement(tag);

    Object.entries(props).forEach(([key, value]) => (elem[key] = value));

    if (text && typeof text === 'string') {
        elem.appendChild(document.createTextNode(text));
    }

    return elem;
} 