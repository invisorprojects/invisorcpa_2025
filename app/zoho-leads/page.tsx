'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ZohoLeadsPage() {
    useEffect(() => {
        // Make functions globally available as the original script expects
        const mndFields1110346000000433216 = [
            'Potential Name',
            'POTENTIALCF7',
        ];
        const fldLangVal1110346000000433216 = ['Name', 'Contact Number'];

        const wfInnerWidth = window.innerWidth;
        const form = document.forms[
            'BiginWebToRecordForm1110346000000433216' as any
        ];
        if (wfInnerWidth <= 768 && form) {
            form.setAttribute('data-ux-form-alignment', 'top');
        }

        function removeError(fieldObj: any) {
            const parentElement = fieldObj.closest('.wf-field');
            const childEle =
                parentElement?.getElementsByClassName('wf-error-parent-ele')[0];
            if (childEle && parentElement) {
                parentElement.classList.remove('wf-field-error-active');
                parentElement.removeChild(
                    parentElement.getElementsByClassName('wf-error-parent-ele')[0]
                );
            }
        }

        function setError(fieldObj: any, label: string) {
            const parentElement = fieldObj.closest('.wf-field');
            const childEle =
                parentElement?.getElementsByClassName('wf-error-parent-ele')[0];
            if (!childEle && parentElement) {
                const errorParentEle = document.createElement('DIV');
                const spanEle = document.createElement('SPAN');
                const viewMoreEle = document.createElement('SPAN');
                spanEle.setAttribute('class', 'wf-field-error wf-field-error-long');
                spanEle.innerHTML = label;
                errorParentEle.classList.add('wf-error-parent-ele');
                errorParentEle.appendChild(spanEle);
                parentElement.append(errorParentEle);
                parentElement.classList.add('wf-field-error-active');
                if (spanEle.scrollWidth > parentElement.offsetWidth) {
                    viewMoreEle.innerHTML = 'View More';
                    viewMoreEle.classList.add('wf-error-view-more');
                    errorParentEle.append(viewMoreEle);
                    viewMoreEle.addEventListener('click', function () {
                        errorParentEle.removeChild(viewMoreEle);
                        spanEle.classList.remove('wf-field-error-long');
                    });
                } else {
                    spanEle.classList.remove('wf-field-error-long');
                }
            }
        }

        function validateFields1110346000000433216() {
            let isReturn = true;
            const form = document.forms[
                'BiginWebToRecordForm1110346000000433216' as any
            ];
            if (!form) return false;
            const validateFld = form.querySelectorAll('[fvalidate=true]');
            let i;
            for (i = 0; i < validateFld.length; i++) {
                const validateFldVal = (validateFld[i] as HTMLInputElement).value;
                const fType = validateFld[i].getAttribute('ftype');
                if (
                    validateFldVal !== '' ||
                    (validateFldVal === '' && fType?.indexOf('date') !== -1)
                ) {
                    const wfLabel =
                        validateFld[i].parentElement?.parentElement?.parentElement?.getElementsByClassName(
                            'wf-label'
                        )[0];
                    const fLabel = wfLabel ? wfLabel.innerHTML : '';
                    switch (validateFld[i].getAttribute('ftype')) {
                        case 'string_rest_number':
                        case 'string':
                            let isError = false,
                                errorKey = 'Only letters are allowed.';
                            if (
                                validateFld[i].getAttribute('ftype') ===
                                    'string_rest_number' &&
                                validateFldVal.match(/\d/g) !== null
                            ) {
                                isError = true;
                            } else if (validateFld[i].hasAttribute('fmin')) {
                                if (
                                    validateFldVal.length <
                                    parseInt(
                                        validateFld[i].getAttribute('fmin') || '0'
                                    )
                                ) {
                                    errorKey =
                                        'Your input must be at least ' +
                                        validateFld[i].getAttribute('fmin') +
                                        ' character(s).';
                                    isError = true;
                                } else if (
                                    validateFldVal.length >
                                    parseInt(
                                        validateFld[i].getAttribute('fmax') || '0'
                                    )
                                ) {
                                    errorKey =
                                        'Your input should not exceed ' +
                                        validateFld[i].getAttribute('fmax') +
                                        ' character(s).';
                                    isError = true;
                                }
                            }
                            if (isError) {
                                setError(validateFld[i], errorKey);
                                isReturn = false;
                            }
                            break;
                        case 'email':
                            if (
                                validateFldVal.match(
                                    /^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/
                                ) === null
                            ) {
                                setError(validateFld[i], 'Enter valid ' + fLabel);
                                isReturn = false;
                            }
                            break;
                        case 'number':
                        case 'double':
                            let isErrorNum = false,
                                errorKeyNum = 'Enter valid ' + fLabel;
                            if (
                                (validateFld[i].getAttribute('ftype') === 'number' &&
                                    validateFldVal.match(/^[0-9]+$/) === null) ||
                                (validateFld[i].getAttribute('ftype') === 'double' &&
                                    validateFldVal.match(/^[0-9]*(\.[0-9]{0,2})?$/) ===
                                        null)
                            ) {
                                isErrorNum = true;
                            } else if (validateFld[i].hasAttribute('fmin')) {
                                const numValue = parseFloat(validateFldVal);
                                const minValue = parseInt(
                                    validateFld[i].getAttribute('fmin') || '0'
                                );
                                const maxValue = parseInt(
                                    validateFld[i].getAttribute('fmax') || '0'
                                );
                                if (
                                    !isNaN(numValue) &&
                                    (numValue < minValue || numValue > maxValue)
                                ) {
                                    if (numValue < minValue) {
                                        errorKeyNum =
                                            'Enter a number greater than or equal to ' +
                                            validateFld[i].getAttribute('fmin');
                                    } else {
                                        errorKeyNum =
                                            'Enter a number less than or equal to ' +
                                            validateFld[i].getAttribute('fmax');
                                    }
                                    isErrorNum = true;
                                }
                            }
                            if (isErrorNum) {
                                setError(validateFld[i], errorKeyNum);
                                isReturn = false;
                            }
                            break;
                        case 'mobile':
                            if (
                                validateFldVal.match(/^[0-9a-zA-Z+.()\-;\s]+$/) === null
                            ) {
                                setError(validateFld[i], 'Enter valid ' + fLabel);
                                isReturn = false;
                            }
                            break;
                    }
                }
            }
            return isReturn;
        }

        function checkMandatory1110346000000433216() {
            let isReturn = true;
            let isNotCaptcha = false;
            for (let i = 0; i < mndFields1110346000000433216.length; i++) {
                const fieldObj = (document.forms[
                    'BiginWebToRecordForm1110346000000433216' as any
                ] as any)[mndFields1110346000000433216[i]];
                if (fieldObj) {
                    if (
                        (fieldObj.value as string).replace(/^\s+|\s+$/g, '').length ===
                        0
                    ) {
                        if (fieldObj.type == 'file') {
                            setError(fieldObj, 'Please select a file to upload.');
                            isReturn = false;
                        } else {
                            setError(
                                fieldObj,
                                fldLangVal1110346000000433216[i] + ' cannot be empty'
                            );
                            isReturn = false;
                        }
                    } else if (fieldObj.nodeName == 'SELECT') {
                        if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                            setError(
                                fieldObj,
                                fldLangVal1110346000000433216[i] + ' cannot be none.'
                            );
                            isReturn = false;
                        }
                    } else if (fieldObj.type == 'checkbox') {
                        if (fieldObj.checked == false) {
                            setError(
                                fieldObj,
                                'Please accept  ' + fldLangVal1110346000000433216[i]
                            );
                            isReturn = false;
                        }
                    }
                }
            }
            isNotCaptcha = true;
            if (!validateFields1110346000000433216()) {
                isReturn = false;
            }
            if (!isReturn) {
                const errEle = document.getElementsByClassName('wf-field-error');
                if (errEle && errEle.length > 0) {
                    const fieldElement = errEle[0].closest('.wf-field');
                    if (fieldElement) {
                        let inputEle: HTMLCollectionOf<HTMLElement> | undefined =
                            fieldElement.getElementsByTagName('input') as unknown as HTMLCollectionOf<HTMLElement>;
                        if (!inputEle || inputEle.length == 0) {
                            inputEle = fieldElement.getElementsByTagName('select') as unknown as HTMLCollectionOf<HTMLElement>;
                        }
                        if (inputEle && inputEle.length > 0) {
                            inputEle[0].focus();
                        }
                    }
                }
            } else if (isNotCaptcha) {
                const submitBtn = document.getElementById('formsubmit');
                if (submitBtn) {
                    (submitBtn as HTMLInputElement).disabled = true;
                }
            }
            return isReturn;
        }

        // Make functions globally available
        (window as any).removeError = removeError;
        (window as any).validateForm1110346000000433216 =
            checkMandatory1110346000000433216;

        // Handle iframe load
        const iframe = document.getElementById(
            'hidden1110346000000433216Frame'
        ) as HTMLIFrameElement;
        if (iframe) {
            iframe.addEventListener('load', function () {
                try {
                    const doc = (this as HTMLIFrameElement).contentWindow?.document;
                    if (doc && doc.body.childElementCount !== 0) {
                        (this as HTMLIFrameElement).style.display = 'block';
                        const formParent = document.getElementById(
                            'BiginWebToRecordFormParent1110346000000433216'
                        );
                        if (formParent) {
                            formParent.style.display = 'none';
                        }
                    }
                } catch {
                    (this as HTMLIFrameElement).style.display = 'block';
                    const formParent = document.getElementById(
                        'BiginWebToRecordFormParent1110346000000433216'
                    );
                    if (formParent) {
                        formParent.style.display = 'none';
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                /* COMMON STYLES */
                :root,
                html {
                    font-size: 10px;
                }
                * {
                    padding: 0;
                    margin: 0;
                    outline: 0;
                }
                html,
                body {
                    height: 100%;
                    width: 100%;
                    font-weight: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    background-color: #edf1f4;
                    font-size: 15px;
                }
                ul,
                ol {
                    list-style-position: inside;
                }
                textarea,
                input[type='text'],
                input[type='button'],
                input[type='submit'],
                input[type='date'] {
                    -webkit-appearance: none;
                }
                input:focus,
                select:focus,
                textarea:focus,
                button:focus {
                    outline: none;
                }
                .link {
                    color: #1980d8;
                    cursor: pointer;
                }
                .cP {
                    cursor: pointer;
                }
                .flex-center-v {
                    display: flex;
                    align-items: center;
                }
                /* COMMON STYLES */
                .wf-form-component {
                    padding: 30px 40px 60px;
                }
                .wf-form-paid {
                    padding-bottom: 45px;
                }
                .wf-parent {
                    padding: 30px 0;
                    height: 100%;
                    box-sizing: border-box;
                    overflow: auto;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .wf-wrapper * {
                    box-sizing: border-box;
                }
                .wf-wrapper {
                    width: 100%;
                    max-width: 700px;
                    border-radius: 10px;
                    margin: auto;
                    border: none;
                    background-color: #fff;
                    color: #222;
                    box-shadow: 0px 0px 2px 0 #00000033;
                }
                .iframe-container {
                    height: 100%;
                    width: 100%;
                    border: none;
                    min-height: 365px;
                }
                .wf-logo {
                    display: flex;
                    margin-bottom: 30px;
                    max-height: 60px;
                    justify-content: center;
                }
                .wf-logo[data-ux-logo-size='lg'] {
                    height: 60px;
                }
                .wf-logo[data-ux-logo-size='md'] {
                    height: 50px;
                }
                .wf-logo[data-ux-logo-size='sm'] {
                    height: 30px;
                }
                .wf-logo[data-ux-logo-pos='left'] {
                    justify-content: left;
                }
                .wf-logo[data-ux-logo-pos='center'] {
                    justify-content: center;
                }
                .wf-logo[data-ux-logo-pos='right'] {
                    justify-content: right;
                }
                .wf-header {
                    font-size: 22px;
                    padding-bottom: 35px;
                    font-weight: bold;
                    word-break: break-word;
                }
                .wf-sec-wrap {
                    margin-bottom: 40px;
                }
                .wf-sec-wrap:first-child .wf-sec-head {
                    margin-top: 0;
                }
                .wf-sec-head {
                    margin-bottom: 20px;
                    margin-top: 35px;
                }
                .wf-sec-title {
                    font-size: 18px;
                    font-weight: bold;
                    word-break: break-word;
                }
                .wf-sec-desc {
                    margin: 0;
                    margin-top: 5px;
                    word-break: break-word;
                }
                .wf-row {
                    margin-bottom: 20px;
                }
                .wf-row-with-supplementary {
                    margin-bottom: 10px;
                }
                .wf-label {
                    padding: 7px 0;
                    word-break: break-word;
                }
                .wf-field:not(.multiple-fields-div) {
                    text-align: left;
                    word-break: break-word;
                    border: 0;
                    position: relative;
                }
                .wf-field-inner {
                    position: relative;
                    display: flex;
                    flex: 1;
                }
                .wf-field-input:focus {
                    border: 1px solid #1980d8;
                }
                .wf-field-dropdown .wf-field-input:focus {
                    border: none;
                }
                .wf-input-focus.wf-field::after {
                    opacity: 1;
                }
                .wf-input-focus.wf-field::after,
                .wf-field-error-active.wf-field .wf-field-error {
                    display: block;
                }
                .wf-field-error-active.wf-field .wf-error-view-more {
                    display: flex;
                }
                .wf-field-error-active.wf-field
                    .wf-field-input:not(.date-input-container .wf-field-input),
                .wf-field-error-active.wf-field .wf-field-dropdown,
                .wf-field-error-active .date-input-container {
                    border: 1px solid #fd6b6d;
                    box-shadow: 0 0 1px 1px #f4a2a2;
                }
                .wf-field-mandatory .wf-field-inner::before {
                    content: '';
                    position: absolute;
                    inset-inline-start: 0px;
                    background-color: #ff6a6a;
                    width: 3px;
                    height: 100%;
                    border-start-start-radius: 4px;
                    border-end-start-radius: 4px;
                    z-index: 2;
                    top: 0;
                    bottom: 0;
                }
                .wf-field-mandatory .wf-field-inner.no-results-elem::before {
                    height: 98%;
                }
                .wf-field-input,
                .wf-field-dropdown {
                    width: 100%;
                    border: 1px solid #bdc8d3;
                    border-radius: 4px;
                    padding: 10px 15px;
                    min-height: 38px;
                    font-size: 15px;
                    font-family: inherit;
                }
                select:not([data-wform-field='select-multiple']) {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    background: transparent;
                    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='34' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
                    background-repeat: no-repeat;
                    background-position-x: 99%;
                    background-color: #fff;
                    min-width: 70px;
                }
                input,
                select {
                    background-color: #fff;
                }
                .wf-field-item {
                    min-height: 38px;
                }
                .wf-time-field-wrapper {
                    display: flex;
                    flex: 1;
                }
                .wf-time-field-wrapper select {
                    margin-left: 10px;
                }
                .wf-form-component .wf-field-error,
                .wf-form-component .wf-field-help-text {
                    text-align: left;
                }
                .wf-form-component .wf-field-error {
                    text-align: right;
                }
                .wf-field-error {
                    color: #ff5050;
                    font-size: 12px;
                    margin-top: 4px;
                    display: none;
                    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
                    transform: translate3d(0, 0, 0);
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
                .wf-field-error-long {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .wf-error-view-more {
                    font-size: 12px;
                    display: none;
                    white-space: nowrap;
                    align-items: center;
                    color: #1880d8;
                    margin-top: 4px;
                }
                .wf-error-view-more:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }
                .wf-error-parent-ele {
                    display: flex;
                    justify-content: end;
                }
                .wf-field-help-text {
                    color: #515159;
                    font-size: 12px;
                    margin-top: 5px;
                }
                .wf-field-help-text + .wf-error-parent-ele .wf-field-error,
                .wf-field-help-text + .wf-error-parent-ele .wf-error-view-more {
                    margin: 0;
                }
                .wf-field-help-text-link {
                    text-decoration: none;
                }
                .wf-field-checkbox {
                    cursor: pointer;
                    border-radius: 3px;
                    min-width: 14px;
                    min-height: 20px;
                    box-sizing: initial;
                    accent-color: #1980d8;
                    margin-inline-end: 10px;
                    margin-bottom: auto;
                }
                .wf-field-dropdown-date {
                    padding: 8px 12px;
                    border-radius: 4px;
                    font-size: 15px;
                    cursor: pointer;
                }
                .wf-field-dropdown-date {
                    border: 1px solid #bdc8d3;
                }
                .wf-field-dropdown-date:hover {
                    border: 1px solid #65c199;
                }
                .wform-field-item-upload-input {
                    min-height: 5rem;
                    background-color: #fbfcfd;
                    border: 1px dashed #bdc8d3;
                    line-height: 2.1;
                    cursor: pointer;
                }
                .wform-field-item-upload-input:focus {
                    border: 1px dashed #bdc8d3;
                }
                .wform-file-upload-input-label {
                    background-color: #fff;
                    background-image: linear-gradient(to top, #f5f8fa, #ffffff);
                    color: #212129;
                    border-color: #d3dbe3;
                    border: 1px solid #d3dbe3;
                    border-radius: 4px;
                    padding: 0.7rem 2rem;
                    font-size: 1.4rem;
                    inset-inline-end: 1rem;
                    transform: translateY(-50%);
                    top: 50%;
                    position: absolute;
                }
                input[type='file']::file-selector-button,
                input[type='file']::-webkit-file-upload-button {
                    opacity: 0;
                    width: 0;
                    height: 28px;
                }
                .wf-row[data-ux-field-appearance='captcha'] .wf-field {
                    display: flex;
                    align-items: center;
                }
                .wform-field-item-captcha-input {
                    border-start-end-radius: 0;
                    border-end-end-radius: 0;
                }
                .wf-field-captcha-img-wrap {
                    border: 1px solid #bdc8d3;
                    border-radius: 4px;
                    border-inline-start: 0;
                    border-start-start-radius: 0;
                    border-end-start-radius: 0;
                    height: initial;
                    overflow: hidden;
                    min-width: 120px;
                }
                .wf-field-captcha-img {
                    height: 38px;
                    width: 100%;
                }
                .reload-img {
                    font-size: 23px;
                    color: #4b5569;
                    margin-inline-end: 5px;
                }
                .reload-captcha {
                    margin-inline-start: 10px;
                    user-select: none;
                }
                .wf-btn {
                    padding: 10px 20px;
                    border-radius: 4px;
                    font-size: 15px;
                    cursor: pointer;
                    font-weight: bold;
                    font-family: inherit;
                }
                .wf-btn[data-ux-btn-type='default'] {
                    border-radius: 0;
                }
                .wf-btn[data-ux-btn-type='primary'] {
                    border-radius: 4px;
                }
                .wf-btn[data-ux-btn-type='secondary'] {
                    border-radius: 20px;
                }
                .wform-btn-wrap {
                    display: flex;
                    margin-top: 40px;
                    align-items: center;
                    justify-content: flex-end;
                    flex: 1;
                }
                .wform-poweredby-container {
                    position: absolute;
                    inset-inline-start: 0;
                    bottom: 0;
                    border-start-end-radius: 10px;
                    border-end-start-radius: 10px;
                    background-color: #23384f;
                    font-size: 13px;
                    padding: 6px 8px;
                    font-family: sans-serif;
                    display: flex;
                    align-items: center;
                }
                .wf-text-area-input {
                    resize: vertical;
                    height: 100px;
                    min-height: 100px;
                    max-height: 200px;
                }
                .dropdown-contents::after {
                    border-left: 0.4rem solid transparent;
                    border-right: 0.4rem solid transparent;
                    border-top: 0.4rem solid black;
                    top: 45%;
                    content: '';
                    position: absolute;
                    inset-inline-end: 1rem;
                    pointer-events: none;
                }
                /* RTL Css change start */
                [dir='rtl'] .multiple-fields-div .wf-field-item:not(.selected-options) {
                    border-radius: 4px 0px 0px 4px;
                }
                [dir='rtl'] .multiple-fields-div .wf-field-dropdown {
                    border-radius: 0px 4px 4px 0px;
                    border-left: 0;
                    border-right: 1px solid #bdc8d3;
                }
                [dir='rtl'] .ux-pick-mixed .dropdown-menu {
                    right: -1px;
                }
                [dir='rtl'] .wf-form-component[data-ux-form-alignment='left'] .wf-label {
                    padding-left: 2rem;
                    padding-right: 0;
                }
                [dir='rtl'] .wf-time-field-wrapper select {
                    margin-left: 0px;
                    margin-right: 10px;
                }
                [dir='rtl'] .wf-calendar-nav-icons.nav-icon-with-space {
                    margin-left: 10px;
                }
                [dir='rtl'] .wf-form-component .wf-field-help-text {
                    text-align: right;
                }
                /* RTL Css change end */
                /* ==================== *** Form Alignment *** ==================== */
                .wf-form-component:not([data-ux-form-alignment='top']) .wf-row {
                    display: flex;
                }
                .wf-form-component:not([data-ux-form-alignment='top']) .wf-label {
                    word-break: break-word;
                    width: 30%;
                    padding: 1.2rem 2rem 0;
                }
                .wf-form-component[data-ux-form-alignment='left'] .wf-label {
                    text-align: left;
                    padding-left: 0;
                }
                .wf-form-component[data-ux-form-alignment='right'] .wf-label {
                    text-align: right;
                }
                .wf-form-component[data-ux-form-alignment='center'] .wf-label {
                    text-align: center;
                }
                .wform-btn-wrap[data-ux-pos='left'] {
                    justify-content: flex-start;
                }
                .wform-btn-wrap[data-ux-pos='center'] {
                    justify-content: center;
                }
                .wform-btn-wrap[data-ux-pos='right'] {
                    justify-content: flex-end;
                }
                .wf-form-component:not([data-ux-form-alignment='top']) .wf-field {
                    width: 70%;
                }
                .wf-form-component[data-ux-form-alignment='top'] .wf-label {
                    padding-top: 0;
                }
                .wf-form-component[data-ux-form-alignment='top'] .reload-captcha {
                    text-align: right;
                }
                .wf-row[data-ux-field-appearance='captcha'] .wf-field-inner {
                    height: 38px;
                }
                .wf-row[data-ux-field-appearance='captcha']
                    .wf-field.wf-field-error-active {
                    flex-wrap: wrap;
                }
                .wf-row[data-ux-field-appearance='captcha'] .wf-field-error {
                    flex-basis: 100%;
                    width: 100%;
                    margin-inline-start: 5px;
                }
                /* ==================== *** Form Alignment ends *** ==================== */

                /* ==================== *** css animations *** ==================== */
                @keyframes shake {
                    10%,
                    90% {
                        transform: translate3d(-1px, 0, 0);
                    }
                    20%,
                    80% {
                        transform: translate3d(2px, 0, 0);
                    }
                    30%,
                    50%,
                    70% {
                        transform: translate3d(-4px, 0, 0);
                    }
                    40%,
                    60% {
                        transform: translate3d(4px, 0, 0);
                    }
                }
                /* ==================== *** css animations ends *** ==================== */

                /* ==================== *** Mediaquery *** ==================== */
                @media screen and (max-width: 1024px) {
                    .wf-wrapper {
                        max-width: 700px;
                        width: calc(100% - 40px);
                        border: 0;
                    }
                    .wf-field input[type='text'],
                    .wf-field select,
                    .wf-field textarea {
                        width: 100% !important;
                    }
                    .wf-label:empty {
                        display: none;
                    }
                    .wf-field-checkbox {
                        min-width: 18px;
                        min-height: 18px;
                    }
                }
                @media screen and (max-width: 768px) {
                    .wf-wrapper {
                        max-width: 700px;
                        width: calc(100% - 40px);
                        border: 0;
                    }
                    .wf-field input[type='text'],
                    .wf-field select,
                    .wf-field textarea {
                        width: 100% !important;
                    }
                    .wf-label:empty {
                        display: none;
                    }
                    .wf-form-component[data-ux-form-alignment='top']
                        .wform-btn-wrap {
                        justify-content: flex-start;
                    }
                }
                @media screen and (max-width: 590px) {
                    .wf-parent {
                        padding: 20px 0;
                    }
                    .wf-wrapper {
                        width: calc(100% - 40px) !important;
                        border: 0;
                    }
                    .wf-form-component {
                        padding: 20px;
                        padding-bottom: 60px;
                    }
                    .wf-field input[type='text'],
                    .wf-field select,
                    .wf-field textarea {
                        width: 100% !important;
                    }
                    .wf-label:empty {
                        display: none;
                    }
                    .wf-row[data-ux-field-appearance='date-time']
                        .wf-field-inner {
                        flex-direction: column;
                    }
                    .wf-row[data-ux-field-appearance='date-time']
                        .wf-time-field-wrapper {
                        margin-top: 10px;
                    }
                    .wf-row[data-ux-field-appearance='date-time']
                        .wf-field-item:first-child {
                        margin-left: 0;
                    }
                    .wf-row[data-ux-field-appearance='date-time'] .wf-field-item {
                        flex: 1;
                    }
                    .wf-row[data-ux-field-appearance='captcha'] .wf-field {
                        flex-direction: column;
                    }
                    .wf-row[data-ux-field-appearance='captcha'] .reload-captcha {
                        margin-left: auto;
                    }
                    .wf-row[data-ux-field-appearance='captcha'] .wf-field-inner {
                        width: 100%;
                    }
                }
                /* ==================== *** Mediaquery ends *** ==================== */
            ` }} />
            <iframe
                id="hidden1110346000000433216Frame"
                name="hidden1110346000000433216Frame"
                style={{ display: 'none' }}
                className="iframe-container"
            ></iframe>
            <div
                className="wf-parent"
                id="BiginWebToRecordFormParent1110346000000433216"
                style={{ backgroundColor: '#EAEEF2' }}
            >
                <div
                    className="wf-wrapper"
                    id="BiginWebToRecordFormDiv1110346000000433216"
                >
                    <form
                        id="BiginWebToRecordForm1110346000000433216"
                        name="BiginWebToRecordForm1110346000000433216"
                        className="wf-form-component"
                        data-ux-form-alignment="top"
                        style={{
                            fontFamily: 'Arial',
                            position: 'relative',
                            fontSize: '15px',
                        }}
                        method="POST"
                        encType="multipart/form-data"
                        target="hidden1110346000000433216Frame"
                        onSubmit={(e) => {
                            // Set charset as original does
                            if (typeof document !== 'undefined') {
                                (document as any).charset = 'UTF-8';
                            }
                            // Call validation function - return false to prevent submission if invalid
                            if (
                                typeof (window as any).validateForm1110346000000433216 ===
                                'function'
                            ) {
                                const isValid = (
                                    window as any
                                ).validateForm1110346000000433216();
                                if (!isValid) {
                                    e.preventDefault();
                                    return false;
                                }
                            }
                            // Allow form to submit normally if validation passes
                            return true;
                        }}
                        acceptCharset="UTF-8"
                    >
                        {/* Do not remove this code. */}
                        <input
                            type="text"
                            style={{ display: 'none' }}
                            name="xnQsjsdp"
                            defaultValue="ab3b259e2c594522f8d1c81c63f2d649f2132edce282824192dd439b5972863e"
                            readOnly
                        />
                        <input
                            type="hidden"
                            name="zc_gad"
                            id="zc_gad"
                            defaultValue=""
                            readOnly
                        />
                        <input
                            type="text"
                            style={{ display: 'none' }}
                            name="xmIwtLD"
                            defaultValue="eb2d70d65399c77507aea383c52ba5778a117b077d0f83647390254eb388a3de3960d8643da6dab687e059fa9b7b19f5"
                            readOnly
                        />
                        <input
                            type="text"
                            style={{ display: 'none' }}
                            name="actionType"
                            defaultValue="UG90ZW50aWFscw=="
                            readOnly
                        />
                        <input
                            type="hidden"
                            name="rmsg"
                            id="rmsg"
                            defaultValue="true"
                            readOnly
                        />
                        <input
                            type="text"
                            style={{ display: 'none' }}
                            name="returnURL"
                            defaultValue="null"
                            readOnly
                        />
                        <div className="wf-header">Submit your details</div>
                        <div
                            id="elementDiv1110346000000433216"
                            className="wf-form-wrapper"
                        >
                            <div className="wf-row">
                                <div className="wf-label">Name</div>
                                <div className="wf-field wf-field-mandatory">
                                    <div className="wf-field-inner">
                                        <input
                                            name="Potential Name"
                                            maxLength={120}
                                            type="text"
                                            defaultValue=""
                                            className="wf-field-item wf-field-input"
                                            onInput={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wf-row">
                                <div className="wf-label">Contact Number</div>
                                <div className="wf-field wf-field-mandatory">
                                    <div className="wf-field-inner">
                                        <input
                                            {...({
                                                fvalidate: 'true',
                                                ftype: 'mobile',
                                            } as React.InputHTMLAttributes<HTMLInputElement>)}
                                            name="POTENTIALCF7"
                                            maxLength={20}
                                            type="text"
                                            defaultValue=""
                                            className="wf-field-item wf-field-input"
                                            onInput={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wf-row">
                                <div className="wf-label">Email</div>
                                <div className="wf-field">
                                    <div className="wf-field-inner">
                                        <input
                                            {...({
                                                fvalidate: 'true',
                                                ftype: 'email',
                                            } as React.InputHTMLAttributes<HTMLInputElement>)}
                                            name="POTENTIALCF3"
                                            maxLength={100}
                                            type="text"
                                            defaultValue=""
                                            className="wf-field-item wf-field-input"
                                            onInput={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wf-row">
                                <div className="wf-label">Branch</div>
                                <div className="wf-field">
                                    <div className="wf-field-inner dropdown-contents">
                                        <select
                                            name="POTENTIALCF10"
                                            className="wf-field-item wf-field-dropdown"
                                            data-wform-field="select"
                                            defaultValue="London"
                                            onChange={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        >
                                            <option value="-None-">-None-</option>
                                            <option value="London">London</option>
                                            <option value="Fergus">Fergus</option>
                                            <option value="Halifax">Halifax</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="wf-row">
                                <div className="wf-label">Lead Source</div>
                                <div className="wf-field">
                                    <div className="wf-field-inner dropdown-contents">
                                        <select
                                            name="Lead Source"
                                            className="wf-field-item wf-field-dropdown"
                                            data-wform-field="select"
                                            defaultValue="Website"
                                            onChange={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        >
                                            <option value="-None-">-None-</option>
                                            <option value="Website">Website</option>
                                            <option value="Bark">Bark</option>
                                            <option value="Reference">Reference</option>
                                            <option value="Inward Whatsapp">
                                                Inward Whatsapp
                                            </option>
                                            <option value="Direct Inward Call/SMS">
                                                Direct Inward Call/SMS
                                            </option>
                                            <option value="FB/Insta">FB/Insta</option>
                                            <option value="Google Ads">Google Ads</option>
                                            <option value="Events/Trade Show">
                                                Events/Trade Show
                                            </option>
                                            <option value="Business Aquisition">
                                                Business Aquisition
                                            </option>
                                            <option value="Inward Email">
                                                Inward Email
                                            </option>
                                            <option value="Email Campaign">
                                                Email Campaign
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="wf-row" style={{ display: 'none' }}>
                                <div className="wf-label">Sub-Pipeline</div>
                                <div className="wf-field">
                                    <div className="wf-field-inner dropdown-contents">
                                        <select
                                            name="Pipeline"
                                            className="wf-field-item wf-field-dropdown"
                                            data-wform-field="select"
                                            defaultValue="New Leads Standard"
                                            onChange={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        >
                                            <option value="New Leads Standard">
                                                New Leads Standard
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="wf-row" style={{ display: 'none' }}>
                                <div className="wf-label">Stage</div>
                                <div className="wf-field">
                                    <div className="wf-field-inner dropdown-contents">
                                        <select
                                            name="Stage"
                                            className="wf-field-item wf-field-dropdown"
                                            data-wform-field="select"
                                            defaultValue="Untouched"
                                            onChange={(e) => {
                                                if (
                                                    typeof (window as any).removeError ===
                                                    'function'
                                                ) {
                                                    (window as any).removeError(e.target);
                                                }
                                            }}
                                        >
                                            <option value="Closed Won">Closed Won</option>
                                            <option value="Closed Lost">
                                                Closed Lost
                                            </option>
                                            <option value="Untouched">Untouched</option>
                                            <option value="Dialed Not Connected">
                                                Dialed Not Connected
                                            </option>
                                            <option value="Interested - Hot Lead">
                                                Interested - Hot Lead
                                            </option>
                                            <option value="Interested - Cold Lead">
                                                Interested - Cold Lead
                                            </option>
                                            <option value="Not Interested">
                                                Not Interested
                                            </option>
                                            <option value="Fixed Appointment">
                                                Fixed Appointment
                                            </option>
                                            <option value="Proposal Sent">
                                                Proposal Sent
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="wform-btn-wrap" data-ux-pos="left">
                                <input
                                    id="formsubmit"
                                    type="submit"
                                    className="wf-btn"
                                    data-ux-btn-type="default"
                                    style={{
                                        backgroundColor: '#1980d8',
                                        color: '#fff',
                                        border: '1px solid #1980d8',
                                        width: 'auto',
                                    }}
                                    value="Submit"
                                />
                            </div>
                        </div>
                        <a
                            className="wform-poweredby-container"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 500,
                            }}
                            href="https://zoho.in/bigin/?utm_source=biginwebforms&utm_medium=organic&utm_id=product"
                            id="poweredBy1110346000000433216"
                        >
                            <span
                                style={{
                                    paddingInlineEnd: '5px',
                                    color: '#C5D4E5',
                                }}
                            >
                                Powered by
                            </span>
                            <img
                                src="https://bigin.zoho.in/images/bigin-logo-xs.svg"
                                style={{ marginInlineEnd: '5px' }}
                                alt="Bigin"
                            />
                            <span>Bigin</span>
                        </a>
                    </form>
                </div>
            </div>
            <Script
                id="wf_script"
                src="https://bigin.zoho.in/crm/WebformScriptServlet?rid=eb2d70d65399c77507aea383c52ba5778a117b077d0f83647390254eb388a3de3960d8643da6dab687e059fa9b7b19f5gidab3b259e2c594522f8d1c81c63f2d649f2132edce282824192dd439b5972863e"
                strategy="afterInteractive"
            />
        </>
    );
}
