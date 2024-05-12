'use client';

import React, { FC, Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { CancelIcon, CheckIcon } from '../icons';
import { Button } from '../button';

export interface ModalProps {
	children: ReactNode;
	title: string;
	isOpen: boolean;
	width: 's' | 'm';
	onClose: () => void;
	onSubmit: () => void;
}

export const Modal: FC<ModalProps> = ({ children, title, isOpen, width, onClose, onSubmit }) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					{/* backdrop */}
					<div className="fixed inset-0 bg-primary-600/20" aria-hidden="true" />
				</Transition.Child>
				{/* modal wrapper */}
				<div className="fixed inset-0 grid min-h-full place-items-end md:place-items-center">
					<div
						className={classNames('w-full', {
							'md:max-w-[465px]': width === 's',
							'md:max-w-[494px]': width === 'm',
						})}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							{/* modal content */}
							<Dialog.Panel className="rounded-t-m bg-white md:rounded-m">
								<Dialog.Title
									as="h3"
									className="flex items-center justify-between rounded-t-m bg-primary-600 px-l py-m text-white mb-font-h3">
									{title}
									<button
										type="button"
										onClick={onClose}
										className="outline-2 outline-offset-4 focus:outline-primary-100">
										<CancelIcon size="s" color="white" />
									</button>
								</Dialog.Title>
								<div className="p-l">
									{children}
									<div className="mt-xxl grid grid-cols-1 gap-s md:grid-cols-2">
										<Button label={'Abbrechen'} Icon={CancelIcon} color="base" onClick={onClose} size="m" />
										<Button label={'Speichern'} Icon={CheckIcon} color="primary" onClick={onSubmit} size="m" />
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
