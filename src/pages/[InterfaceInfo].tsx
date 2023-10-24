import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {getInterfaceInfoVOByIdUsingGET, interfaceInfoinvokeUsingPOST} from "@/services/wfAPI/jiekoumokuai";
import {useParams} from "@@/exports";
import {Button, Card, Col, Descriptions, Row} from "antd";
import RequestParams from "@/components/InterfaceInfo/requestParams";


const InterfaceInfo: React.FC = () => {
    // const {initialState} = useModel('@@initialState');
    const [loading, setLoading] = useState(false);
    //是否点击调用
    const [showInvockCard, setshowInvockCard] = useState(false);
    //获取当前路由参数，也是一个hook
    const params = useParams()
    /*数据*/
    const [data, setData] = useState<wfAPI.InterfaceInfoVO>();
    const [resData,setResData] = useState<any>(null);
    /*获取数据*/
    const loadData = async (id?: number) => {
        setLoading(true)
        try {
            const res = await getInterfaceInfoVOByIdUsingGET({id: id ?? 0})
            if (res) {
                setData(res.data)
            }
        } catch (e) {

        } finally {
            setLoading(false)
        }

    }
    /*加载数据的逻辑*/
    useEffect(() => {
        /*使用useeffect会在页面首次加载发送一次请求，并且监控的变量发生改变也会重新加载请求*/
        loadData(Number(params.id))
    }, []);
    const onFinish = async (values: any) => {
      let res = null
      try {
        res = await interfaceInfoinvokeUsingPOST({
          ...values,
          id:data?.id
        })
        if (res){
            console.log(res)
            setResData(JSON.stringify(res))
        }
      }catch (e:any) {
          setResData(e)
      }
    };
    const handlerInvockClick = ()=>{
        setshowInvockCard(!showInvockCard)
        console.log()
    }
    return (<PageContainer title={"在线接口展示"}>
        <Row >
          <Col span={showInvockCard?12:24}><Card>
            <Descriptions
                title={"接口名称: " + data?.name}
                column={1}
                extra={<Button type="primary" onClick={handlerInvockClick}>{!showInvockCard?'调用':'取消调用'}</Button>}>
              <Descriptions.Item label="接口描述">{data?.description}</Descriptions.Item>
              <Descriptions.Item label="接口状态">{data?.status === 0 ? "下线中" : "已上线"}</Descriptions.Item>
              <Descriptions.Item label="接口地址">{data?.url}</Descriptions.Item>
              <Descriptions.Item label="请求方式">{data?.method}</Descriptions.Item>
              <Descriptions.Item label="请求参数">{data?.requestparams}</Descriptions.Item>
              <Descriptions.Item label="请求数据类型">{data?.requesttype}</Descriptions.Item>
              <Descriptions.Item label="响应参数">{data?.responseparams}</Descriptions.Item>
              <Descriptions.Item label="响应数据类型">{data?.responsetype}</Descriptions.Item>
              <Descriptions.Item label="请求头信息">{data?.requestheader}</Descriptions.Item>
              <Descriptions.Item label="响应头信息">{data?.responseheader}</Descriptions.Item>
              <Descriptions.Item label="创建用户">{data?.user?.username}</Descriptions.Item>
              <Descriptions.Item label="更新时间">{data?.createtime}</Descriptions.Item>
              <Descriptions.Item label="创建时间">{data?.updatetime}</Descriptions.Item>
            </Descriptions>
          </Card></Col>
            {
                showInvockCard &&(
                    data && <RequestParams data={data}/>
                )
            }
        </Row>
        </ PageContainer>

    )
};

export default InterfaceInfo;
