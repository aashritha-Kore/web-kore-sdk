import BaseChatTemplate from '../baseChatTemplate';
import './pieChart.scss';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Message } from '../message/message';
import KoreGraphAdapter from '../../../../libs/kore-graph-adapter/KoreGraphAdapter';
import { getHTML } from '../../../base/domManager';

export function PieChart(props: any) {
    const msgData = props.msgData;
    return (
        <div className="chart-template-wrapper">
            <div className="d3Pie"></div>
            <div className="piechartDiv charts-body-info">
                <h1>{msgData?.message?.[0]?.component?.payload?.text}</h1>
                <div className="lineChartChildDiv" id={`piechart${msgData.messageId}`}></div>
            </div>
        </div>

    );
}

export function PieChartBase(props: any) {
    const hostInstance = props.hostInstance;
    const msgData = props.msgData;
    const messageObj = {
        msgData,
        hostInstance
    }

    if (msgData?.message?.[0]?.component?.payload?.template_type == 'piechart') {
        const pieChartHTML = getHTML(PieChart, msgData, hostInstance);
        KoreGraphAdapter.drawPieChartTemplate(msgData, pieChartHTML, { graphLib: 'd3' });

        setTimeout(() => {
            hostInstance.chatEle.querySelector('.chat-widget-body-wrapper').scrollTo({
                top: hostInstance.chatEle.querySelector('.chat-widget-body-wrapper').scrollHeight,
                behavior: 'smooth'
            });
        }, 200);

        return (
            <PieChart {...messageObj} />
        )
    }
}

class TemplatePieChart extends BaseChatTemplate {
    hostInstance: any = this;

    renderMessage(msgData: any) {
        return this.getHTMLFromPreact(PieChartBase, msgData, this.hostInstance);
    }
}

export default TemplatePieChart;

