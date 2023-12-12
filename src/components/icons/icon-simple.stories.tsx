import React, { FC } from 'react';
import { CheckIcon } from './check';
import { CancelIcon } from './cancel';
import { RepostIcon } from './repost';
import { TimeIcon } from './time';
import { MumbleIcon } from './mumble';
import { FullscreenIcon } from './fullscreen';
import { SendIcon } from './send';
import { EditIcon } from './edit';
import { LocationIcon } from './location';
import { ShareIcon } from './share';
import { ProfileIcon } from './profile';
import { EyeIcon } from './eye';
import { SettingsIcon } from './settings';
import { LogoutIcon } from './logout';
import { CalendarIcon } from './calendar';
import { IconProps } from './iconUtils';

export const iconComponents = {
	Checkmark: CheckIcon,
	Cancel: CancelIcon,
	Repost: RepostIcon,
	Time: TimeIcon,
	Mumble: MumbleIcon,
	Fullscreen: FullscreenIcon,
	Send: SendIcon,
	Edit: EditIcon,
	Location: LocationIcon,
	Share: ShareIcon,
	Profile: ProfileIcon,
	Eye: EyeIcon,
	Settings: SettingsIcon,
	Logout: LogoutIcon,
	Calendar: CalendarIcon,
};

const defaultArgs: IconProps = {
	size: 's',
	color: 'base',
};

const createTemplate = (IconComponent: FC<IconProps>) => {
	const Template = (args: IconProps) => <IconComponent {...args} />;
	Template.args = { ...defaultArgs };
	return Template;
};

export const Checkmark = createTemplate(iconComponents.Checkmark);
export const Cancel = createTemplate(iconComponents.Cancel);
export const Repost = createTemplate(iconComponents.Repost);
export const Time = createTemplate(iconComponents.Time);
export const Mumble = createTemplate(iconComponents.Mumble);
export const Fullscreen = createTemplate(iconComponents.Fullscreen);
export const Send = createTemplate(iconComponents.Send);
export const Edit = createTemplate(iconComponents.Edit);
export const Location = createTemplate(iconComponents.Location);
export const Share = createTemplate(iconComponents.Share);
export const Profile = createTemplate(iconComponents.Profile);
export const Eye = createTemplate(iconComponents.Eye);
export const Settings = createTemplate(iconComponents.Settings);
export const Logout = createTemplate(iconComponents.Logout);
export const Calendar = createTemplate(iconComponents.Calendar);

export default {
	title: 'Components/Icons',
	component: CheckIcon,
	argTypes: {
		size: {
			options: ['s', 'm', 'l'],
			control: { type: 'radio' },
		},
		color: {
			options: ['base', 'white', 'primary', 'secondary', 'error'],
			control: { type: 'radio' },
		},
	},
};
