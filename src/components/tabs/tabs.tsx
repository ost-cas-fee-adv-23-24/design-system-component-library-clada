'use client';

import React, { FC, useState } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface TabItemProps {
	text: string;
	onClick: () => void;
	selected?: boolean;
}

export interface TabsProps {
	tabs: TabItemProps[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
	const [selectedItem, setSelectedItem] = useState<number>(tabs.findIndex((tab: TabItemProps) => tab.selected) ?? 0);

	return (
		<Tab.Group
			onChange={(index) => {
				tabs[index].onClick();
				setSelectedItem(index);
			}}>
			<Tab.List className={'inline-block rounded-s bg-base-200 p-[5px]'}>
				{tabs.map((item, index) => {
					const { text } = item;

					return (
						<Tab
							key={index}
							className={classNames('relative gap-s rounded-s mb-font-label-l', {
								'text-primary-600': index === selectedItem,
								'text-base-600 duration-300 hover:text-base-800': index !== selectedItem,
							})}>
							{selectedItem === index && (
								<motion.span
									layoutId="bubble"
									className="inset-0 absolute z-10 h-[100%] w-[100%] rounded-s bg-white"
									transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
								/>
							)}
							<span className={'relative z-20 inline-block p-xs'}>{text}</span>
						</Tab>
					);
				})}
			</Tab.List>
		</Tab.Group>
	);
};
