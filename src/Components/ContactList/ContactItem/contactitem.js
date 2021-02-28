import React from 'react';

const ContactItem = ({Avatar, Name, Role, Created, Status, Email}) => {
    return(
        <tr>
			<td>
				<img src={Avatar} alt=""/>
				<a href="#" class="user-link">{Name}</a>
				<span class="user-subhead">{Role}</span>
			</td>
			<td>
				{Created}
			</td>
			<td class="text-center">
				<span class="label label-default">{Status}</span>
			</td>
			<td>
				<a href="#">{Email}</a>
			</td>
			<td>
					                <a href="#" class="table-link">
									<span class="fa-stack">
										<i class="fa fa-square fa-stack-2x"></i>
										<i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
									</span>
								</a>
								<a href="#" class="table-link">
									<span class="fa-stack">
										<i class="fa fa-square fa-stack-2x"></i>
										<i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
									</span>
								</a>
								<a href="#" class="table-link danger">
									<span class="fa-stack">
										<i class="fa fa-square fa-stack-2x"></i>
										<i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
									</span>
								</a>
							
						</td>
						</tr>
    )
}

export default ContactItem;