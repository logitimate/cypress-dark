// for now CSS is a string here
const css = `
/* Cypress v3 */
.reporter {
  background-color: #222426
}
.runner header {
  background-color: #222426
}
.runner header .url {
  color: #aaaaaa;
  background-color: #222426
}
.runner .url:hover, .runner .url:focus, .runner .url:active {
  color: #eeeeee;
}
.runner .highlighted .url, .runner .url:focus {
  background-color: #444648;
}

.runner .viewport-info button {
  text-shadow: none
}
.runner .viewport-info button:hover {
  color: #cccccc;
}
.runner {
  background-image: none;
  background-color: #3a3a3a
}

.reporter .container {
  border: none;
}

.runner .selector-playground-toggle:hover {
  background: none;
  color: #cccccc;
}

.reporter header {
  background-color: #222426;
  color: #cccccc;
}
.reporter header button {
  background-color: #222426;
}
.reporter header button:hover {
  background-color: #222426;
  color: #cccccc;
}

.reporter .runnable {
  background-color: #222426;
}
.reporter .runnable:hover {
  background-color: #222426;
}
.reporter .commands-container {
  background-color: #292c2e;
}
.reporter .command-wrapper:hover {
  background-color: #292c2e;
  color: #ffffff;
  box-shadow: none;
  -webkit-box-shadow: none;
}
.reporter .focus-tests button {
  border-right: 1px solid #3a3a3a;
}
.reporter .stats .duration {
  border-left: 1px solid #3a3a3a;
  border-right: 1px solid #3a3a3a;
}
.reporter .controls > span:last-child button {
  border-right: 1px solid #3a3a3a;
}

.reporter .command-state-pending > span > .command-wrapper {
  background-color: #3a3a3a;
}
.reporter .command-type-parent {
  border-top: 1px solid #666565;
}
.reporter .command-type-parent:hover {
  border-top: 1px solid #777777;
}

.runner .aut-iframe {
  background-color: #222426;
}

.reporter .runnable.suite > div > .runnable-wrapper .runnable-title {
  color: #cccccc;
}

.reporter .hooks-container .hook-name:hover {
  color: #ffffff;
}

.reporter .command-is-pinned > span > .command-wrapper {
  background-color: #3b1654;
}
.reporter .command-is-pinned > span > .command-wrapper:hover {
  background-color: #531f77;
}
.runner .message-controls {
  background-color: #222426;
}
.runner .snapshot-controls.showing-selection .toggle-selection {
  background-color: #292c2e;
}
.runner .snapshot-controls button:active {
  background-color: #292c2e;
  color: #cccccc;
}
.runner .snapshot-controls .snapshot-state-picker button.state-is-selected {
  background-color: #666565;
  color: yellow;
}
.runner .snapshot-controls button:hover {
  background-color: #292c2e;
  color: #cccccc;
}
`

/* eslint-env mocha, browser */
/* global Cypress */
before(() => {
  const $head = Cypress.$(parent.window.document.head)
  if (!$head.find('#cypress-dark').length) {
    $head.append(`<style type="text/css" id="cypress-dark">\n${css}</style>`)
  }
})