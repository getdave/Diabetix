/*global diabetix, $*/


/* window.diabetix = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Evt: {},
    init: function () {
        'use strict';
        _.extend(diabetix.Evt, Backbone.Events);
        diabetix.foodsRouter = new diabetix.Routers.FoodsRouter();
        Backbone.history.start({pushState: false});
    }
};

$(document).ready(function () {
    'use strict';
    diabetix.init();
}); */


var diabetix = new Backbone.Marionette.Application();

diabetix.Models = {};
diabetix.Collections = {};
diabetix.Views = {};
diabetix.Routers = {};

diabetix.addRegions({
    appHeader: "#app-header",
    appSecondaryHeader: "#app-secondary-header",
    appMain: "#app-main"
});


diabetix.on("initialize:after", function(){
    console.log("diabetix has started!");
    if (Backbone.history){
        diabetix.foodsRouter = new diabetix.Routers.FoodsRouter();
        Backbone.history.start();
    }
});

diabetix.start();


