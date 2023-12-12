'use client';

import React, { FC, Fragment, useState, useRef } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export type TabsProps = {
	/**
	 * Collection of multiple tab items
	 */
	tabs: {
		text: string;
		onClick: () => void;
		selected?: boolean;
	}[];
};

export const Tabs: FC<TabsProps> = ({ tabs }) => {
	const [mouseOverIndex, setMouseOverIndex] = useState<number | undefined>(undefined);
	const getInitialSelectedItem = () => {
		const index = tabs?.findIndex((tab) => tab?.selected);
		return index !== -1 ? index : 0;
	};

	// we need this uuid for the layoutId of the motion.span element
	// it sets the correct affiliation, so the state changes will not conflict if multiple tabs components would be used on the same site.
	const uuid = useRef(crypto.randomUUID());

	return (
		<Tab.Group
			defaultIndex={getInitialSelectedItem()}
			onChange={(index) => {
				tabs[index]?.onClick();
			}}>
			<Tab.List className={'inline-flex gap-xs rounded-s bg-base-200 p-[5px]'}>
				{tabs.map((item, index) => {
					const { text } = item;

					return (
						<Tab as={Fragment} key={index}>
							{({ selected }) => (
								<button
									className={classNames('relative rounded-s outline-none mb-font-label-l', {
										'text-primary-600': selected,
										'text-base-600 duration-300 hover:text-base-800': !selected,
									})}
									onMouseEnter={() => setMouseOverIndex(index)}
									onMouseLeave={() => setMouseOverIndex(undefined)}>
									{selected && (
										<motion.span
											layoutId={`bubble-${uuid.current}`}
											className={classNames('inset-0 absolute z-10 h-[100%] w-[100%] rounded-s bg-white', {
												'w-[calc(100%+4px)]': Number(mouseOverIndex) > index,
												'-left-xxs w-[calc(100%+4px)]': Number(mouseOverIndex) < index,
											})}
											transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
										/>
									)}
									<span className={'relative z-20 inline-block p-xs'}>{text}</span>
								</button>
							)}
						</Tab>
					);
				})}
			</Tab.List>
		</Tab.Group>
	);
};
