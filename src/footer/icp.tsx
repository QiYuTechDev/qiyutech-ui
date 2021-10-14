import * as React from 'react';
import {ReactNode} from 'react';
import {Container, Link, Typography} from "@mui/material"


interface ICPFooterProps {
    // ICP 备案序号
    icp_num: number
    // 公安备案号码
    ga_num?: string
    // 公安备案图片
    ga_img?: string
}

interface ICPFooterState {
}


/**
 * ICP 备案 Footer
 */
export class ICPFooterBlock extends React.Component<ICPFooterProps, ICPFooterState> {
    static defaultProps = {
        icp_num: 0
    }


    constructor(props: ICPFooterProps) {
        super(props);
        this.state = {}
    }

    render() {
        return <Container style={{width: "100%"}}>
            <Typography align={"center"}>版权所有 © 2019-2021 <Link href={"https://www.qiyutech.tech/"}>奇遇科技</Link>
            </Typography>
            <Typography align={"center"}>联系方式:
                <Link href={"mailto:admin@qiyutech.tech"}>admin@qiyutech.tech</Link>
            </Typography>
            <div style={{textAlign: "center"}}>
                {this.icpUI()}
                {this.gaUI()}
            </div>
        </Container>
    }

    protected icpUI = (): ReactNode => {
        const icp = this.props.icp_num
        if (icp) {
            return <a href="https://beian.miit.gov.cn" target="_blank">津ICP备20005561号-{icp}</a>
        } else {
            return <a href="https://beian.miit.gov.cn" target="_blank">津ICP备20005561号</a>
        }
    }

    protected gaUI = (): ReactNode => {
        const ga_num = this.props.ga_num
        if (!ga_num) {
            return null
        }

        const url = new URL("http://www.beian.gov.cn/portal/registerSystemInfo")
        url.searchParams.set("recordcode", ga_num)

        return <>
            <a href={url.toString()} target="_blank">
                <img src={this.props.ga_img} alt="公安"/>津公网安备 {ga_num} 号
            </a>
        </>
    }
}


