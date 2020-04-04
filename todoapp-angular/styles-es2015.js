(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #111111;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -140px;\n\twidth: 100%;\n\tfont-size: 80px;\n\tfont-weight: 200;\n\ttext-align: center;\n\tcolor: #b83f45;\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\twidth: 60px;\n\theight: 34px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -52px;\n\tleft: -13px;\n\ttransform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n\tfont-weight: 400;\n\tcolor: #4d4d4d;\n}\n\n.todo-list li.completed label {\n\tcolor: #cdcdcd;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tfont-size: 15px;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #4d4d4d;\n\tfont-size: 11px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEIscUJBQWdCO01BQWhCLGdCQUFnQjtDQUNoQixtQ0FBbUM7Q0FDbkMsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MseURBQXlEO0NBQ3pELGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLG1DQUFtQztDQUNuQyxrQ0FBa0M7Q0FDbEMsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7NkNBQzRDO0FBQzdDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLDBDQUEwQztDQUMxQyx1Q0FBdUM7Q0FDdkMsa0NBQWtDO0FBQ25DOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLGtC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O0FBRUE7O0NBRUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGVBQWU7Q0FDZiw2Q0FBNkM7Q0FDN0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7OztDQUdDOztBQUNEO0NBQ0M7O0VBRUMsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLFlBQVk7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuYm9keSB7XG5cdGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRjb2xvcjogIzExMTExMTtcblx0bWluLXdpZHRoOiAyMzBweDtcblx0bWF4LXdpZHRoOiA1NTBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG46Zm9jdXMge1xuXHRvdXRsaW5lOiAwO1xufVxuXG4uaGlkZGVuIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9hcHAge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW46IDEzMHB4IDAgNDBweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcblx0ICAgICAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udG9kb2FwcCBoMSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMTQwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDgwcHg7XG5cdGZvbnQtd2VpZ2h0OiAyMDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICNiODNmNDU7XG5cdC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0LW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG4ubmV3LXRvZG8sXG4uZWRpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XG5cdGxpbmUtaGVpZ2h0OiAxLjRlbTtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDZweDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5uZXctdG9kbyB7XG5cdHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDYwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwMyk7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLDAsMCwwLjAzKTtcbn1cblxuLm1haW4ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDI7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuXG4udG9nZ2xlLWFsbCB7XG5cdHdpZHRoOiAxcHg7XG5cdGhlaWdodDogMXB4O1xuXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cblx0b3BhY2l0eTogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMTAwJTtcblx0Ym90dG9tOiAxMDAlO1xufVxuXG4udG9nZ2xlLWFsbCArIGxhYmVsIHtcblx0d2lkdGg6IDYwcHg7XG5cdGhlaWdodDogMzRweDtcblx0Zm9udC1zaXplOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTUycHg7XG5cdGxlZnQ6IC0xM3B4O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4udG9nZ2xlLWFsbCArIGxhYmVsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICfina8nO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGNvbG9yOiAjZTZlNmU2O1xuXHRwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xufVxuXG4udG9nZ2xlLWFsbDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcblx0Y29sb3I6ICM3MzczNzM7XG59XG5cbi50b2RvLWxpc3Qge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi50b2RvLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyAuZWRpdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XG5cdHBhZGRpbmc6IDEycHggMTZweDtcblx0bWFyZ2luOiAwIDAgMCA0M3B4O1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLnZpZXcge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MHB4O1xuXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXG5cdGhlaWdodDogYXV0bztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0bWFyZ2luOiBhdXRvIDA7XG5cdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSArIGxhYmVsIHtcblx0Lypcblx0XHRGaXJlZm94IHJlcXVpcmVzIGAjYCB0byBiZSBlc2NhcGVkIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTIyNDMzXG5cdFx0SUUgYW5kIEVkZ2UgcmVxdWlyZXMgKmV2ZXJ5dGhpbmcqIHRvIGJlIGVzY2FwZWQgdG8gcmVuZGVyLCBzbyB3ZSBkbyB0aGF0IGluc3RlYWQgb2YganVzdCB0aGUgYCNgIC0gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNzE1NzQ1OS9cblx0Ki9cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB3aWR0aCUzRCUyMjQwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjB2aWV3Qm94JTNEJTIyLTEwJTIwLTE4JTIwMTAwJTIwMTM1JTIyJTNFJTNDY2lyY2xlJTIwY3glM0QlMjI1MCUyMiUyMGN5JTNEJTIyNTAlMjIlMjByJTNEJTIyNTAlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHN0cm9rZSUzRCUyMiUyM2VkZWRlZCUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjMlMjIvJTNFJTNDL3N2ZyUzRScpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlOmNoZWNrZWQgKyBsYWJlbCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNiZGRhZDUlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzNWRjMmFmJTIyJTIwZCUzRCUyMk03MiUyMDI1TDQyJTIwNzElMjAyNyUyMDU2bC00JTIwNCUyMDIwJTIwMjAlMjAzNC01MnolMjIvJTNFJTNDL3N2ZyUzRScpO1xufVxuXG4udG9kby1saXN0IGxpIGxhYmVsIHtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA2MHB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0dHJhbnNpdGlvbjogY29sb3IgMC40cztcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Y29sb3I6ICM0ZDRkNGQ7XG59XG5cbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcblx0Y29sb3I6ICNjZGNkY2Q7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95IHtcblx0ZGlzcGxheTogbm9uZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAxMHB4O1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiAjY2M5YTlhO1xuXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcblx0Y29sb3I6ICNhZjViNWU7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6YWZ0ZXIge1xuXHRjb250ZW50OiAnw5cnO1xufVxuXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvLWxpc3QgbGkgLmVkaXQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5mb290ZXIge1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdGhlaWdodDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuXG4uZm9vdGVyOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdGhlaWdodDogNTBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcblx0ICAgICAgICAgICAgMCA4cHggMCAtM3B4ICNmNmY2ZjYsXG5cdCAgICAgICAgICAgIDAgOXB4IDFweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcblx0ICAgICAgICAgICAgMCAxNnB4IDAgLTZweCAjZjZmNmY2LFxuXHQgICAgICAgICAgICAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udG9kby1jb3VudCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG9kby1jb3VudCBzdHJvbmcge1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4uZmlsdGVycyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0bGVmdDogMDtcbn1cblxuLmZpbHRlcnMgbGkge1xuXHRkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5maWx0ZXJzIGxpIGEge1xuXHRjb2xvcjogaW5oZXJpdDtcblx0bWFyZ2luOiAzcHg7XG5cdHBhZGRpbmc6IDNweCA3cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmZpbHRlcnMgbGkgYTpob3ZlciB7XG5cdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xKTtcbn1cblxuLmZpbHRlcnMgbGkgYS5zZWxlY3RlZCB7XG5cdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4yKTtcbn1cblxuLmNsZWFyLWNvbXBsZXRlZCxcbmh0bWwgLmNsZWFyLWNvbXBsZXRlZDphY3RpdmUge1xuXHRmbG9hdDogcmlnaHQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbmZvIHtcblx0bWFyZ2luOiA2NXB4IGF1dG8gMDtcblx0Y29sb3I6ICM0ZDRkNGQ7XG5cdGZvbnQtc2l6ZTogMTFweDtcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvIHAge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cblxuLmluZm8gYSB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbmZvIGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLypcblx0SGFjayB0byByZW1vdmUgYmFja2dyb3VuZCBmcm9tIE1vYmlsZSBTYWZhcmkuXG5cdENhbid0IHVzZSBpdCBnbG9iYWxseSBzaW5jZSBpdCBkZXN0cm95cyBjaGVja2JveGVzIGluIEZpcmVmb3hcbiovXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcblx0LnRvZ2dsZS1hbGwsXG5cdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0fVxuXG5cdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG5cdFx0aGVpZ2h0OiA0MHB4O1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuXHQuZm9vdGVyIHtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdH1cblxuXHQuZmlsdGVycyB7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHR9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/blacksonic/todomvc-angular/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map