import React from "react";

import Phone from "@material-ui/icons/PhoneInTalkRounded";
import Email from "@material-ui/icons/MailOutlineOutlined";
export default function Card(props) {
	return (
		<div className='flex justify-center items-center shadow-lg hover:shadow-2xl hover:border-gray-500 border-solid border-2 border-gray-300 w-1/2 mx-auto my-3 p-5 rounded-lg bg-white'>
			<div>
				<img class='rounded-full' src={props.src} alt='' />
			</div>
			<div class='ml-5'>
				<p class='text-xl capital'>
					{props.firstName} {props.lastName}
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					laudantium ullam, voluptate eaque ex.
				</p>
				<p class='text-green-400'>
					<span class='mr-2'>
						<Phone />
					</span>
					{props.cell}
				</p>
				<p class='text-green-400'>
					<span class='mr-2'>
						<Email />
					</span>
					{props.email}
				</p>
			</div>
		</div>
	);
}
