'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { User, Mail, Phone, RefreshCw, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactUsForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaRefreshing, setCaptchaRefreshing] = useState(false);

    useEffect(() => {
        // Define Zoho global helper functions
        (window as any).addAriaSelected1324457000002829011 = function (event: any) {
            if (!event || !event.target) return;
            var optionElem = event.target;
            var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
            if (optionElem.options && optionElem.selectedIndex >= 0) {
                optionElem.options[optionElem.selectedIndex].setAttribute('aria-selected', 'true');
            }
        };

        (window as any).reloadImg1324457000002829011 = function () {
            var captcha = document.getElementById('imgid1324457000002829011') as HTMLImageElement;
            if (captcha) {
                if (captcha.src.indexOf('&d') !== -1) {
                    captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
                } else {
                    captcha.src = captcha.src + '&d' + new Date().getTime();
                }
            }
        };

        (window as any).historyBack1324457000002829011 = function () {
            var btn = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
            if (btn) btn.removeAttribute('disabled');
            if (typeof (window as any).reloadImg1324457000002829011 !== 'undefined') {
                (window as any).reloadImg1324457000002829011();
            }
            window.removeEventListener('focus', (window as any).historyBack1324457000002829011);
        };

        (window as any).validateEmail1324457000002829011 = function () {
            var form = document.forms['WebToLeads1324457000002829011' as any] as HTMLFormElement;
            if (!form) return true;
            var emailFld = form.querySelectorAll('[ftype=email]') as NodeListOf<HTMLInputElement>;
            for (var i = 0; i < emailFld.length; i++) {
                var emailVal = emailFld[i].value;
                if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
                    var atpos = emailVal.indexOf('@');
                    var dotpos = emailVal.lastIndexOf('.');
                    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                        alert('Please enter a valid email address.');
                        emailFld[i].focus();
                        return false;
                    }
                }
            }
            return true;
        };

        (window as any).trackVisitor1324457000002829011 = function () {
            try {
                if ((window as any).$zoho) {
                    var form = document.forms['WebToLeads1324457000002829011' as any];
                    if (form) {
                        var LDTuvidObj = form['LDTuvid'];
                        if (LDTuvidObj && (window as any).$zoho.salesiq?.visitor?.uniqueid) {
                            LDTuvidObj.value = (window as any).$zoho.salesiq.visitor.uniqueid();
                        }
                        var name = '';
                        var lastnameObj = form['Last Name'];
                        if (lastnameObj) {
                            name = lastnameObj.value;
                        }
                        var firstnameObj = form['First Name'];
                        if (firstnameObj) {
                            name = firstnameObj.value + ' ' + name;
                        }
                        if ((window as any).$zoho.salesiq?.visitor?.name) {
                            (window as any).$zoho.salesiq.visitor.name(name);
                        }
                        var emailObj = form['Email'];
                        if (emailObj && (window as any).$zoho.salesiq?.visitor?.email) {
                            (window as any).$zoho.salesiq.visitor.email(emailObj.value);
                        }
                    }
                }
            } catch (e) {}
        };

        (window as any).checkMandatory1324457000002829011 = function (isAjax: boolean) {
            var mndFileds = ['Last Name'];
            var fldLangVal = ['Last Name'];
            var form = document.forms['WebToLeads1324457000002829011' as any];
            if (!form) return false;
            for (var i = 0; i < mndFileds.length; i++) {
                var fieldObj = form[mndFileds[i]];
                if (fieldObj) {
                    if (fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
                        if (fieldObj.type === 'file') {
                            alert('Please select a file to upload.');
                            fieldObj.focus();
                            return false;
                        }
                        alert(fldLangVal[i] + ' cannot be empty.');
                        fieldObj.focus();
                        return false;
                    } else if (fieldObj.nodeName === 'SELECT') {
                        if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
                            alert(fldLangVal[i] + ' cannot be none.');
                            fieldObj.focus();
                            return false;
                        }
                    } else if (fieldObj.type === 'checkbox') {
                        if (fieldObj.checked === false) {
                            alert('Please accept ' + fldLangVal[i]);
                            fieldObj.focus();
                            return false;
                        }
                    }
                }
            }
            (window as any).trackVisitor1324457000002829011();
            if (!(window as any).validateEmail1324457000002829011()) {
                return false;
            }
            var urlparams = new URLSearchParams(window.location.search);
            if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
                var webform = document.getElementById('webform1324457000002829011');
                var service = urlparams.get('service');
                var smarturlfield = document.createElement('input');
                smarturlfield.setAttribute('type', 'hidden');
                smarturlfield.setAttribute('value', service || '');
                smarturlfield.setAttribute('name', 'service');
                if (webform) webform.appendChild(smarturlfield);
            }
            var submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
            if (submitBtn) submitBtn.setAttribute('disabled', 'true');
            return true;
        };

        (window as any).captchaFailedHandling1324457000002829011 = function (message: string) {
            var capErr = document.getElementById('captchaErr1324457000002829011');
            if (capErr) {
                capErr.innerHTML = message;
                capErr.style.visibility = 'visible';
                capErr.style.display = 'block';
                var capFld = document.getElementById('captchaField1324457000002829011');
                if (capFld) capFld.focus();
                setTimeout(function () {
                    var el = document.getElementById('captchaErr1324457000002829011');
                    if (el) el.style.visibility = 'hidden';
                }, 5000);
            }
        };

        if (typeof (window as any)._wfa_fstprtcken === 'undefined') {
            (window as any)._wfa_fstprtcken = {};
        }
        (window as any)._wfa_fstprtcken[1324457000002829011] = true;

        const formElement = document.getElementById('webform1324457000002829011');
        const handleFormSubmit = function (e: Event) {
            var ismandatory = (window as any).checkMandatory1324457000002829011(true);
            e.preventDefault();
            if (ismandatory === undefined || ismandatory) {
                setIsSubmitting(true);
                if (typeof (window as any)._wfa_track !== 'undefined' && (window as any)._wfa_track.wfa_submit) {
                    (window as any)._wfa_track.wfa_submit(e);
                }
                var formData = new FormData(formElement as HTMLFormElement);
                fetch('https://crm.zoho.in/crm/WebToLeadForm', {
                    method: 'POST',
                    body: formData,
                    cache: 'no-cache',
                })
                    .then((response) => {
                        const contentType = response.headers.get('Content-Type');
                        return contentType && contentType.includes('application/json')
                            ? response.json()
                            : response.text();
                    })
                    .then((data) => {
                        setIsSubmitting(false);
                        if (typeof data === 'object') {
                            if (data.actionsubmit === 'Splash Message') {
                                if (data.invalidCaptcha && data.invalidCaptcha === 'true') {
                                    (window as any).captchaFailedHandling1324457000002829011(data.actionvalue);
                                } else {
                                    if (typeof (window as any).reloadImg1324457000002829011 !== 'undefined') {
                                        (window as any).reloadImg1324457000002829011();
                                    }
                                    var splashinfodom = document.getElementById('wf_splash_info');
                                    var splashdom = document.getElementById('wf_splash');
                                    if (splashinfodom && splashdom) {
                                        splashinfodom.innerText = data.actionvalue || 'Thank you! Your submission has been received.';
                                        (document.getElementById('webform1324457000002829011') as HTMLFormElement)?.reset();
                                        splashdom.style.display = 'flex';
                                        setTimeout(function () {
                                            var sDom = document.getElementById('wf_splash');
                                            if (sDom) sDom.style.display = 'none';
                                        }, 5000);
                                    }
                                    if (typeof (window as any)._wfa_track !== 'undefined' && (window as any)._wfa_track.wfa_post_submit) {
                                        (window as any)._wfa_track.wfa_post_submit(e);
                                    }
                                }
                            } else if (data.actionsubmit === 'redirect_url' || data.actionsubmit === 'parent_redirect') {
                                if (data.success) {
                                    if (typeof (window as any)._wfa_track !== 'undefined' && (window as any)._wfa_track.wfa_post_submit) {
                                        (window as any)._wfa_track.wfa_post_submit(e);
                                    }
                                    if (typeof (window as any).historyBack1324457000002829011 !== 'undefined') {
                                        window.addEventListener('focus', (window as any).historyBack1324457000002829011);
                                    }
                                }
                                if (data.actionsubmit === 'redirect_url') {
                                    window.location.assign(data.redirectUrl);
                                } else if (data.actionsubmit === 'parent_redirect') {
                                    window.parent.location = data.redirectUrl;
                                }
                            } else if (data.actionsubmit === 'add_hash') {
                                document.location.hash = data.hash;
                            } else if (data.actionsubmit === 'error_msg') {
                                alert(data.message);
                            } else if (data.invalidCaptcha && data.invalidCaptcha === 'true') {
                                (window as any).captchaFailedHandling1324457000002829011(data.actionvalue);
                                if (data.extraAction === 'parent_signal') {
                                    window.parent.postMessage('checkCaptchaError', '*');
                                }
                            } else if (data.actionsubmit === 'captcha_error') {
                                alert(data.message);
                                if (data.extraAction === 'parent_signal') {
                                    window.parent.postMessage('checkCaptchaError', '*');
                                }
                            } else if (data.actionsubmit === 'thankyou_page') {
                                if (typeof (window as any)._wfa_track !== 'undefined' && (window as any)._wfa_track.wfa_post_submit) {
                                    (window as any)._wfa_track.wfa_post_submit(e);
                                    if (typeof (window as any).historyBack1324457000002829011 !== 'undefined') {
                                        window.addEventListener('focus', (window as any).historyBack1324457000002829011);
                                    }
                                }
                                window.location.assign(data.redirectUrl);
                            }
                        } else {
                            // In case Zoho returns direct HTML content
                            document.open();
                            document.write(data);
                            document.close();
                        }
                        let formDom = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
                        if (formDom) {
                            formDom.removeAttribute('disabled');
                        }
                    })
                    .catch(() => {
                        setIsSubmitting(false);
                        alert('An error occurred. Please try again.');
                        let formDom = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
                        if (formDom) {
                            formDom.removeAttribute('disabled');
                        }
                    });
            }
        };

        if (formElement) {
            formElement.addEventListener('submit', handleFormSubmit);
        }

        return () => {
            if (formElement) {
                formElement.removeEventListener('submit', handleFormSubmit);
            }
        };
    }, []);

    const handleReloadCaptcha = () => {
        setCaptchaRefreshing(true);
        if (typeof (window as any).reloadImg1324457000002829011 === 'function') {
            (window as any).reloadImg1324457000002829011();
        } else {
            var captcha = document.getElementById('imgid1324457000002829011') as HTMLImageElement;
            if (captcha) {
                if (captcha.src.indexOf('&d') !== -1) {
                    captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
                } else {
                    captcha.src = captcha.src + '&d' + new Date().getTime();
                }
            }
        }
        setTimeout(() => setCaptchaRefreshing(false), 500);
    };

    return (
        <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm w-full">
            {/* SalesIQ Script */}
            <Script
                id="zoho-salesiq-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        var $zoho = $zoho || {};
                        $zoho.salesiq = $zoho.salesiq || {
                            widgetcode: 'siq1d948c6a930ae771b716446ddda51a6f4660fbc26975166a5c4a2f177d9d12bb901e024f6efc8db9c532992309d4058a',
                            values: {},
                            ready: function(){}
                        };
                        var d = document;
                        var s = d.createElement('script');
                        s.type = 'text/javascript';
                        s.id = 'zsiqscript';
                        s.defer = true;
                        s.src = 'https://salesiq.zoho.in/widget';
                        var t = d.getElementsByTagName('script')[0];
                        if (t && t.parentNode) {
                            t.parentNode.insertBefore(s, t);
                        } else {
                            d.head.appendChild(s);
                        }
                    `,
                }}
            />
            {/* Analytics Tracking Code */}
            <Script
                id="wf_anal"
                src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=576e4a65d0e322f74e1aa82ef5e21b93db543e868d3c30d9154614bc63d52f1f707082d3e97fa1d49a7f864a129a5138gid5127a1eb9b5730f3fd1d2907dcf6530030f099721e0382acfc3b9faf9993c8e5gid6ba52b5cb9efc4141c8e5e0f5d417d190bef113275c30e6bc0fa8d3da64ce468gidf7e31cc6a1c65add829507e4e0962f0329ccdafd924562ef05f994605e7ddec4&tw=2e1c3356d90022e20e4f7514611f7ab79d85ed383b57c3bb60b26baa3935f029&version=v2"
                strategy="afterInteractive"
            />

            {/* Success Splash Message Banner */}
            <div
                id="wf_splash"
                style={{ display: 'none' }}
                className="mb-6 items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-sm transition-all dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
            >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <CheckCircle2 className="h-5 w-5" />
                </div>
                <span id="wf_splash_info" className="text-sm font-medium"></span>
            </div>

            {/* Form Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/40 transition-all dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                <div className="mb-6 space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Send Us a Message
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Fill in your details below and our CPA team will reach out to you promptly.
                    </p>
                </div>

                <form
                    id="webform1324457000002829011"
                    name="WebToLeads1324457000002829011"
                    acceptCharset="UTF-8"
                    className="space-y-5"
                >
                    {/* Hidden tracking fields required by Zoho */}
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        name="xnQsjsdp"
                        value="2fe12553e3128c314996e3ac2a33d9a4cb215fcca2095656c8e009cebaaf21d0"
                        readOnly
                    />
                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        name="xmIwtLD"
                        value="019026ae08cdc1ad68539d9e3dd9a0b5b47e53df2d530970c47a2a0aeb745c56950f1e9757ad6a5430b2c6e4264042c2"
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        name="actionType"
                        value="TGVhZHM="
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        name="returnURL"
                        value="null"
                        readOnly
                    />
                    {/* Do not remove this code. */}
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        id="ldeskuid"
                        name="ldeskuid"
                    />
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        id="LDTuvid"
                        name="LDTuvid"
                    />
                    <input
                        type="text"
                        style={{ display: 'none' }}
                        name="aG9uZXlwb3Q"
                        value=""
                        readOnly
                    />

                    {/* Name Fields Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* First Name */}
                        <div className="space-y-2">
                            <label
                                htmlFor="First_Name"
                                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                            >
                                <User className="h-3.5 w-3.5 text-slate-400" />
                                First Name
                            </label>
                            <Input
                                type="text"
                                id="First_Name"
                                aria-required="false"
                                aria-label="First Name"
                                name="First Name"
                                maxLength={40}
                                placeholder="John"
                                className="h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <label
                                htmlFor="Last_Name"
                                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                            >
                                <User className="h-3.5 w-3.5 text-slate-400" />
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                id="Last_Name"
                                aria-required="true"
                                aria-label="Last Name"
                                name="Last Name"
                                maxLength={80}
                                required
                                placeholder="Doe"
                                className="h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="Email"
                            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                        >
                            <Mail className="h-3.5 w-3.5 text-slate-400" />
                            Email Address
                        </label>
                        <Input
                            type="text"
                            {...({ ftype: 'email' } as any)}
                            autoComplete="off"
                            id="Email"
                            aria-required="false"
                            aria-label="Email"
                            name="Email"
                            maxLength={100}
                            placeholder="john@example.com"
                            className="h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="Phone"
                            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                        >
                            <Phone className="h-3.5 w-3.5 text-slate-400" />
                            Phone Number
                        </label>
                        <Input
                            type="text"
                            id="Phone"
                            aria-required="false"
                            aria-label="Phone"
                            name="Phone"
                            maxLength={30}
                            placeholder="+1 (555) 000-0000"
                            className="h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                        />
                    </div>

                    {/* Hidden Lead Status Dropdown Field (Zoho requirement) */}
                    <div className="hidden">
                        <label htmlFor="Lead_Status">Stage</label>
                        <select
                            id="Lead_Status"
                            aria-required="false"
                            aria-label="Lead Status"
                            name="Lead Status"
                            defaultValue="New Enquiry"
                        >
                            <option value="-None-">-None-</option>
                            <option value="New Enquiry">New Enquiry</option>
                            <option value="Carryovers">Carryovers</option>
                            <option value="Appointment Fixed">Appointment Fixed</option>
                            <option value="Onboarded">Onboarded</option>
                            <option value="Pigeon Send">Pigeon Send</option>
                            <option value="Partial Document Arrived">Partial Document Arrived</option>
                            <option value="Document Arrived">Document Arrived</option>
                            <option value="Work Started">Work Started</option>
                            <option value="For Review">For Review</option>
                            <option value="Waiting For Signature">Waiting For Signature</option>
                            <option value="T183 Signed">T183 Signed</option>
                            <option value="E-Filed">E-Filed</option>
                            <option value="Paper Filed">Paper Filed</option>
                            <option value="Refiled">Refiled</option>
                            <option value="Rollover To Next Year">Rollover To Next Year</option>
                            <option value="Dropped File">Dropped File</option>
                            <option value="Blacklisted">Blacklisted</option>
                            <option value="Deceased">Deceased</option>
                            <option value="Junk Clients">Junk Clients</option>
                        </select>
                    </div>

                    {/* Captcha Section */}
                    <div className="space-y-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                        <div className="flex items-center justify-between">
                            <label
                                id="reCaptchaField"
                                htmlFor="captchaField1324457000002829011"
                                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                            >
                                <ShieldCheck className="h-4 w-4 text-blue-600" />
                                Security Verification <span className="text-red-500">*</span>
                            </label>
                            <button
                                type="button"
                                onClick={handleReloadCaptcha}
                                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400"
                            >
                                <RefreshCw className={`h-3.5 w-3.5 ${captchaRefreshing ? 'animate-spin' : ''}`} />
                                Refresh Code
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {/* Captcha Image Container */}
                            <div className="relative flex h-11 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-900">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    id="imgid1324457000002829011"
                                    src="https://crm.zoho.in/crm/CaptchaServlet?formId=019026ae08cdc1ad68539d9e3dd9a0b5b47e53df2d530970c47a2a0aeb745c56950f1e9757ad6a5430b2c6e4264042c2&grpid=2fe12553e3128c314996e3ac2a33d9a4cb215fcca2095656c8e009cebaaf21d0"
                                    alt="Captcha"
                                    className="h-full object-contain"
                                />
                            </div>

                            {/* Captcha Input */}
                            <div className="relative flex-1">
                                <Input
                                    type="text"
                                    id="captchaField1324457000002829011"
                                    aria-labelledby="reCaptchaField"
                                    maxLength={10}
                                    name="enterdigest"
                                    required
                                    placeholder="Enter code above"
                                    className="h-11 rounded-lg border-slate-200 bg-white text-slate-900 transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                                />
                            </div>
                        </div>

                        {/* Captcha Error Container */}
                        <div
                            id="captchaErr1324457000002829011"
                            aria-live="polite"
                            style={{ visibility: 'hidden' }}
                            className="text-xs font-semibold text-red-600"
                        ></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                        <Button
                            type="submit"
                            id="formsubmit"
                            disabled={isSubmitting}
                            className="formsubmit zcwf_button flex-1 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-sky-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99] disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <RefreshCw className="h-4 w-4 animate-spin" />
                                    Submitting...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <Send className="h-4 w-4" />
                                    Submit Request
                                </span>
                            )}
                        </Button>

                        <input
                            type="reset"
                            className="hidden"
                            name="reset"
                            value="Reset"
                        />
                    </div>
                </form>

                {/* Hidden captcha iframe required by Zoho */}
                <iframe name="captchaFrame" style={{ display: 'none' }}></iframe>
            </div>
        </div>
    );
}

