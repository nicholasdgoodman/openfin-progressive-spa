import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const { fin } = window;
const popupElementId = 'popupRoot';

export const PopupHost = props => {
    return <div id={popupElementId}></div>
}


export const PopupContent = fin ? props => {

    console.log('theres fin alright!');

    const [ container, setContainer ] = useState();

    useEffect(() => {
        let child;
        async function createPopupWindow() {
            let win = await fin.Window.create({
                url: '/popup',
                name: 'popup',
                frame: false,
                defaultCentered: true,
                alwaysOnTop: true,
                defaultWidth: 480,
                defaultHeight: 320
            });
            child = win.getWebWindow();
            setContainer(child.document.getElementById(popupElementId));
        }
        createPopupWindow();
        
        function closePopupWindow() {
            if(child) child.close()
        }

        return closePopupWindow;
    }, []);

    return container ? createPortal(props.children, container) : null;
} : props => props.children;