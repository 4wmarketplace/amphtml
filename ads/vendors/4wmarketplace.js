import {loadScript} from '#3p/3p';

import {dev} from '#utils/log';

/**
 * @param {!Window} global
 * @param {!Object} data
 */

export function _4wmarketplace(global, data) {
    const $4wm = global;
    const containerDiv = $4wm.document.createElement('div');
    const containerId = 'csacontainer';
    containerDiv.id = containerId;
    $4wm.document.getElementById('c').appendChild(containerDiv);

    if (typeof data.adtype != 'undefined' && data.adtype == 'ad-custom') {
        $4wm.fwtag = {
            cmd: []
        };
        $4wm.fwtag.cmd.push(function() {
            $4wm.fwtag.addSlotNative({
                id: containerId,
                sid: data.sid,
                n: data.n,
                hd: data.hd,
                r: data.r,
                imgsize: data.imgsize,
                excludeMobCss: data.excludeMobCss,
                css: data.css,
                class: data.class
            });
        });
        loadScript($4wm, 'https://adsr.4wnetwork.com/js/fwloader.js', () => {
                    window.addEventListener('message', (e) => {
                        if (e.data.message == "RESIZE_AMP" && typeof e.data.height != 'undefined') {
                            $4wm.context.requestResize(undefined, e.data.height);
                        }
                    });
                });

    }else{
        let obj = {
            cid: containerId,
            ic: data.id,
            format: data.format ? data.format : null,
            position: data.position ? data.position : null,
            dim: data.dim ? data.dim : null,
            nid: data.nid ? data.nid : null,
        };
        for (var key in obj) {
            if (obj[key] == null) {
                delete obj[key];
            }
        }

        $4wm.obj_4w = [];
        $4wm.obj_4w.push(obj);
        loadScript($4wm, 'https://optimized-by.4wnetwork.com/js/sdk.min.js', () => {
            window.addEventListener('message', (e) => {
                if (e.data.message == "RESIZE_AMP" && typeof e.data.height != 'undefined') {
                    $4wm.context.requestResize(undefined, e.data.height);
                }
                if (e.data.message == "CLOSE_AMP_STILL") {
                    $4wm.context.noContentAvailable();
                }
            });
        });
    }

}
