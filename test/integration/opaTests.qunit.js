/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/zybc_db/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});