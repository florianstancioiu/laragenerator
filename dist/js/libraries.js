window._ = require('lodash');
try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('jquery-ui-dist/jquery-ui.min');
// Resolve conflict in jQuery UI tooltip with Bootstrap tooltip
$.widget.bridge('uibutton', $.ui.button);

require('bootstrap/dist/js/bootstrap.bundle.min');
require('jquery-knob-chif/dist/jquery.knob.min');
require('overlayscrollbars/js/OverlayScrollbars.min');
