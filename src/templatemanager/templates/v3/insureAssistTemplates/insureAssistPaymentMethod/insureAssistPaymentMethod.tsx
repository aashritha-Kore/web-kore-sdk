import BaseChatTemplate from '../../baseChatTemplate';
import './insureAssistpaymentMethod.scss';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Message } from '../../message/message';


export function Payment(props: any) {
    const hostInstance = props.hostInstance;
    const msgData = props.msgData;
    const messageobj = {
        msgData: msgData,
        hostInstance: hostInstance
    }
    const [isEnabled, setEnabled] = useState(true);

    const handleButtonEvent = (e: any) => {
        if (e.type.toLowerCase() == 'postback' || e.type.toLowerCase() == 'text') {
            hostInstance.sendMessage(e.value, { renderMsg: e.title });
            setEnabled(false);
        } else if (e.type == 'url' || e.type == 'web_url') {
            setEnabled(false);
            let link = e.value;
            if (link.indexOf('http:') < 0 && link.indexOf('https:') < 0) {
                link = `http:////${link}`;
            }
            hostInstance.openExternalLink(link);
        }
    }
    if (msgData?.message?.[0]?.component?.payload?.template_type == 'insureAssistListTemplate') {
        return (
            <div className="list-style">
                <div className="card-acc-temp">
                    <div className="card-style card-style-header" style={msgData?.message?.[0]?.component?.payload?.titleStyle}>
                        {msgData?.message?.[0]?.component?.payload.title && <h2>{msgData?.message?.[0]?.component?.payload.title}</h2>}
                    </div>
                    {/* payement methods start*/}
                    {
                        msgData?.message?.[0]?.component?.payload.items.map((val: any) => (
                            <div class={`slider ${isEnabled ? '' : 'disabled-slider card-acc-temp-sec card-style'}`} className="card-acc-temp-sec card-style" onClick={() => handleButtonEvent(val.actions)}>
                                <div>
                                    <div className="left-data">
                                        {val.title && <h1>{val.title}</h1>}
                                        {val.date && <h2 style={val.titleStyles && val.titleStyles}>{val.date}</h2>}
                                        {val.subtitle && <p>{val.subtitle}</p>}
                                    </div>
                                    <div className="right-data">
                                        {
                                            val?.titleValue?.map((item: any) => (
                                                <div>
                                                    <div className="right-data">
                                                        {item.iconValue && <img src={item?.iconValue} alt="icon" />}
                                                        {item?.textValue && <h1 style={item?.valueStyle && item.valueStyle}>{item?.textValue}</h1>}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                {
                                    val?.description?.map((item: any) => (
                                        <div>
                                            <div className="left-data">
                                                {item?.title && <p>{item?.title}</p>}
                                            </div>
                                            <div className="right-data">
                                                {item?.title && <p>{item?.value}</p>}
                                            </div>
                                        </div>
                                    ))
                                }
                                <div>
                                </div>
                            </div>
                        ))
                    }

                    {msgData?.message?.[0]?.component?.payload?.buttons &&
                        <div className="btn-group">
                            {
                                msgData?.message?.[0]?.component?.payload?.buttons?.map((button: any) => (
                                    <button style={button?.buttonStyle} class={`slider ${isEnabled ? '' : 'disabled-slider view-renewal-btn'}`} className="view-renewal-btn" onClick={() => handleButtonEvent(button)}>{button?.buttonTitle}</button>
                                ))
                            }
                        </div>
                    }

                </div>
            </div>
        );
    }
}

class insureAssistPaymentMethod extends BaseChatTemplate {
    hostInstance: any = this;
    renderMessage(msgData: any) {
        return this.getHTMLFromPreact(Payment, msgData, this.hostInstance);
    }
}

export default insureAssistPaymentMethod;

