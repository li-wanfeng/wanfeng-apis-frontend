import React, {useEffect, useState} from "react";
import {Input, Button, Card, Col} from 'antd';
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/input/Search";
const RequestParams: React.FC<{data:wfAPI.InterfaceInfoVO}> = ({data}) => {
    const [requestParam, setRequestParam] = useState('');
    const [reMethod, setReMethod] = useState('');
    const [responceContent,setResponceContent] = useState('')
    useEffect(()=>{
        if (data.requestparams && data.requestparams.length > 0) {
            const paseParams = JSON.parse(data.requestparams);
            const formatted = JSON.stringify(paseParams, null, 2);
            setRequestParam(formatted);
        }
        if (data.method && data.method.length >=0) {
            setReMethod(data.method);
        }
    },[{...data}])
    const handleParamsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRequestParam(e.target.value);
    };
    const handleSendClick = () => {
        // 处理发送请求的逻辑
    };
    return(
        <Col span={12}>
            <Card>
                <Search
                    addonBefore={<span style={{fontWeight:'bold'}}>{reMethod.toUpperCase()}  请求</span>}
                    defaultValue={`${data.url}`}
                    allowClear
                    onSearch={handleSendClick}
                    enterButton="发送"
                    style={{ width: '100%' }}
                />
                <div style={{margin:20}}><span style={{fontWeight:'bold'}}>请求参数</span></div>
                <div style={{ display: 'flex', marginBottom: 16 }}>
                    <div style={{ flex: 1 }}>
                        <Input.TextArea
                            value={requestParam}
                            onChange={handleParamsChange}
                            autoSize={{ minRows: 6, maxRows: 12 }}
                        />
                    </div>
                    <div style={{ marginLeft: 16 }}>
                    </div>
                </div>
                <div style={{margin:20}}><span style={{fontWeight:'bold'}}>响应内容</span></div>
                <TextArea value={responceContent} autoSize={{ minRows: 10 }}/>
            </Card>
        </Col>
    )
};
export default RequestParams;
