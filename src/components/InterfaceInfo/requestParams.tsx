import React, {useEffect, useState} from "react";
import {Card, Col, Input, Spin} from 'antd';
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/input/Search";
import {interfaceInfoinvokeUsingPOST} from "@/services/wfAPI/jiekoumokuai";

const RequestParams: React.FC<{ data: wfAPI.InterfaceInfoVO }> = ({data}) => {
    const [responceContent, setResponceContent] = useState('')
    const [params, setParams] = useState('')
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        if (data.requestparams && data.requestparams.length > 0) {
            const paseParams = JSON.parse(data.requestparams);
            const formatted = JSON.stringify(paseParams, null, 2);
            setParams(formatted);
        }
    }, [])
    const handleParamsChange = (event:any) => {
        setParams(event.target.value)
    };
    const handleSendClick = async () => {
        setLoading(true)
        try {
            const res = await interfaceInfoinvokeUsingPOST({
                id: data.id, method: data.method, requestparams: JSON.parse(params), url: data.url, requesttype: data.requesttype
            })
            setResponceContent(JSON.stringify(res.data,null,2))
        } catch (e) {
        } finally {
            setLoading(false)
        }

    };
    return (<Col span={12}>
            <Card>
                <Search
                    addonBefore={<span style={{fontWeight: 'bold'}}>{data?.method?.toUpperCase()} 请求</span>}
                    defaultValue={`${data.url}`}
                    allowClear
                    onSearch={handleSendClick}
                    enterButton="发送"
                    style={{width: '100%'}}
                />
                <div style={{margin: 20}}><span style={{fontWeight: 'bold'}}>请求参数</span></div>
                <div style={{display: 'flex', marginBottom: 16}}>
                    <div style={{flex: 1}}>
                            <Input.TextArea
                                value={params}
                                onChange={handleParamsChange}
                                autoSize={{minRows: 6, maxRows: 12}}
                            />
                    </div>
                    <div style={{marginLeft: 16}}>
                    </div>
                </div>
                <div style={{margin: 20}}><span style={{fontWeight: 'bold'}}>响应内容</span></div>
                <Spin spinning={loading}><TextArea value={responceContent} autoSize={{minRows: 10}}/></Spin>
            </Card>
        </Col>)
};
export default RequestParams;
