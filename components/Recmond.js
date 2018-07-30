import React from 'react'
import Url from '../img/mdmd.png'
class Recmond extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='list'>
				<div className='list_top'>
					<span></span>
					<h3>推荐商家</h3>
					<span></span>	
				</div>
				<div className='list_con'>
					<div className='list_con_top'>
						<ul>
							<li>综合排序</li>
							<li>距离最近</li>
							<li>品质联盟</li>
							<li>筛选</li>
						</ul>
					</div>
					<div className='list_con_con'>
						<ul>
							<li>
								<div><img src={Url} /></div>
								<div>
									<p><span>品牌</span><b>米多面多(京广路店)</b><span>票</span></p>
									<p><span></span>4.8 月售3539单<span>蜂鸟专送</span></p>
									<p><span>￥20起送<i>|</i>配送费￥3</span><span>409m<i>|</i>20分钟</span></p>
									<p><span>简餐</span><span>口碑人气好店</span></p>
									<p><i>首</i><span>新用户下单立减17元</span><span>4个活动</span></p>
									<p><i>减</i>满25减14,满45减21,满75减35,满9...</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Recmond;