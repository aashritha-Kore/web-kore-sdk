

import BaseChatTemplate from '../baseChatTemplate';
import './digitalForm.scss';
import { h } from 'preact';
import { getHTML } from '../../../base/domManager';

export function DigitalFormExtension(props: any) {
    return (
        <div style={{ height: '300px'}}>
            <iframe style={{ height: '100%', width: '100%' }} src={props.msgData.message[0].component.formData.formLink}></iframe>
        </div>
    );
}

export function DigitalForm(props: any) {
    const hostInstance = props.hostInstance;
    const msgData = props.msgData;
    const handleForm = () => {
        hostInstance.bottomSliderAction('', getHTML(DigitalFormExtension, msgData, hostInstance))
    }
    if (msgData?.message?.[0]?.component?.payload?.template_type === 'button' && msgData?.message?.[0]?.component?.formData) {
        return (
            <div>
                <div className="thumbnails-wrapper forms-thumbnails">
                    <div className="thumbnail-data-content">
                        <div className="icon-block">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30911 0.101563H10.6913C11.3707 0.101557 11.9149 0.101553 12.3549 0.1375C12.8067 0.174415 13.1981 0.252039 13.5584 0.435628C14.1351 0.72948 14.604 1.19837 14.8978 1.77508C15.0814 2.1354 15.159 2.52674 15.196 2.97856C15.2319 3.41852 15.2319 3.96278 15.2319 4.64211V13.3577C15.2319 14.037 15.2319 14.5813 15.196 15.0212C15.159 15.4731 15.0814 15.8644 14.8978 16.2247C14.604 16.8014 14.1351 17.2703 13.5584 17.5642C13.1981 17.7478 12.8067 17.8254 12.3549 17.8623C11.9149 17.8982 11.3706 17.8982 10.6913 17.8982H5.30915C4.6298 17.8982 4.08552 17.8982 3.64555 17.8623C3.19373 17.8254 2.80239 17.7478 2.44207 17.5642C1.86536 17.2703 1.39647 16.8014 1.10262 16.2247C0.919031 15.8644 0.841407 15.4731 0.804492 15.0212C0.768546 14.5813 0.76855 14.037 0.768555 13.3577V4.64212C0.76855 3.96278 0.768546 3.41852 0.804492 2.97856C0.841407 2.52674 0.919031 2.1354 1.10262 1.77508C1.39647 1.19837 1.86536 0.72948 2.44207 0.435628C2.80239 0.252039 3.19373 0.174415 3.64555 0.1375C4.08551 0.101553 4.62977 0.101557 5.30911 0.101563ZM3.73757 1.26375C3.35563 1.29495 3.12955 1.35357 2.95508 1.44247C2.59099 1.62798 2.29497 1.924 2.10946 2.28809C2.02056 2.46256 1.96194 2.68864 1.93074 3.07058C1.89899 3.45911 1.89855 3.95717 1.89855 4.66656V13.3332C1.89855 14.0426 1.89899 14.5407 1.93074 14.9292C1.96194 15.3112 2.02056 15.5372 2.10946 15.7117C2.29497 16.0758 2.59099 16.3718 2.95508 16.5573C3.12955 16.6462 3.35563 16.7048 3.73757 16.736C4.1261 16.7678 4.62417 16.7682 5.33355 16.7682H10.6669C11.3763 16.7682 11.8743 16.7678 12.2629 16.736C12.6448 16.7048 12.8709 16.6462 13.0454 16.5573C13.4095 16.3718 13.7055 16.0758 13.891 15.7117C13.9799 15.5372 14.0385 15.3112 14.0697 14.9292C14.1014 14.5407 14.1019 14.0426 14.1019 13.3332V4.66656C14.1019 3.95717 14.1014 3.45911 14.0697 3.07058C14.0385 2.68864 13.9799 2.46256 13.891 2.28809C13.7055 1.924 13.4095 1.62798 13.0454 1.44247C12.8709 1.35357 12.6448 1.29495 12.2629 1.26375C11.8743 1.232 11.3763 1.23156 10.6669 1.23156H5.33355C4.62417 1.23156 4.1261 1.232 3.73757 1.26375ZM4.10189 4.83323C4.10189 4.52119 4.35485 4.26823 4.66689 4.26823H11.3336C11.6456 4.26823 11.8986 4.52119 11.8986 4.83323C11.8986 5.14527 11.6456 5.39823 11.3336 5.39823H4.66689C4.35485 5.39823 4.10189 5.14527 4.10189 4.83323ZM4.10189 8.16656C4.10189 7.85452 4.35485 7.60156 4.66689 7.60156H9.66689C9.97893 7.60156 10.2319 7.85452 10.2319 8.16656C10.2319 8.4786 9.97893 8.73156 9.66689 8.73156H4.66689C4.35485 8.73156 4.10189 8.4786 4.10189 8.16656ZM4.10189 11.4999C4.10189 11.1879 4.35485 10.9349 4.66689 10.9349H11.3336C11.6456 10.9349 11.8986 11.1879 11.8986 11.4999C11.8986 11.8119 11.6456 12.0649 11.3336 12.0649H4.66689C4.35485 12.0649 4.10189 11.8119 4.10189 11.4999Z" fill="#697586"/>
                            </svg>
                        </div>
                        <h1>InsureAssist Login</h1>
                        <p>Please click login below to enter your credentials.</p>
                        {
                            msgData.message[0].component.payload.buttons.map((ele: any) => (
                                <button className="link-btn" onClick={handleForm}>{ele.title}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

class DigitalFormTemplate extends BaseChatTemplate {
    hostInstance: any = this;

    renderMessage(msgData: any) {
        return this.getHTMLFromPreact(DigitalForm, msgData, this.hostInstance);
    }

}

export default DigitalFormTemplate;

