angular.module('Deepfilms.services')

.factory('PostsByTypeAndSlug', function ($resource) {

    getPostsByTypeAndSlug = function (type) {
        return $resource(ajaxInfo.api_url + type + '/?filter[name]=:slug',{
        slug:'@slug'
        }, { cache: true});
    };

    return {
        getPostsByTypeAndSlug: getPostsByTypeAndSlug
    };

});