/**
 * Created by nmande on 4/13/16.
 */

/**
 * Build widget configuration
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('CloudWidgetConfigController', CloudWidgetConfigController);

    CloudWidgetConfigController.$inject = ['modalData', '$scope', 'cloudData', '$modalInstance'];
    function CloudWidgetConfigController(modalData, $scope, cloudData, $modalInstance) {

        var ctrl = this;
        var widgetConfig = modalData.widgetConfig;

        // public variables
        ctrl.asvDropdownPlaceholder = 'Please select an ASV...';
        ctrl.ASVs = cloudData.getASV();
        ctrl.asvDropdownDisabled = (ctrl.ASVs.length <= 0);
        ctrl.selectedItem = undefined;



        // public methods
        ctrl.submit = function (valid) {
            if (valid) {

                var postObj = {};

                var form = document.cloudConfigForm;
                var postObj = {
                    name: 'cloud',
                    options: {
                        id: widgetConfig.options.id,
                        tag: ctrl.selectedItem
                    },
                    componentId: modalData.dashboard.application.components[0].id
                };

                // pass this new config to the modal closing so it's saved
                $modalInstance.close(postObj);
            }
        }
    }
})();
