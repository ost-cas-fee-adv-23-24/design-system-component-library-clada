/* // src/stories/Icon.stories.js

import React from 'react';
import CheckIcon from './check';
import CancelIcon from './cancel';
import RepostIcon from './repost';
import TimeIcon from './time';
import MumbleIcon from './mumble';
import FullscreenIcon from './fullscreen';
import SendIcon from './send';


export default {
	title: 'Components/Icons',
	component: CheckIcon,
	argTypes: {
		size: {
			options: ['s', 'm', 'l'],
			control: { type: 'radio' },
		},
		color: {
			options: ['slate', 'white'],
			control: { type: 'radio' },
		},
	},
};

const CheckTemplate = (args) => <CheckIcon {...args} />;

export const Checkmark = CheckTemplate.bind({});
Checkmark.args = {
	size: 's', // Default size
	color: 'slate', // Default color
};

const CancelTemplate = (args) => <CancelIcon {...args} />;

export const Cancel = CancelTemplate.bind({});
Cancel.args = {
	size: 's', // Default size
	color: 'slate', // Default color
};

const RepostTemplate = (args) => <RepostIcon {...args} />;

export const Repost = RepostTemplate.bind({});
Repost.args = {
	size: 's', // Default size
	color: 'slate', // Default color
};


const TimeTemplate = (args) => <TimeIcon {...args} />;

export const Time = TimeTemplate.bind({});
Time.args = {
	size: 's', // Default size
	color: 'slate', // Default color
};

const MumbleTemplate = (args) => <MumbleIcon {...args} />;

export const Mumble = MumbleTemplate.bind({});
Mumble.args = {
	size: 's', // Default size
	color: 'slate', // Default color
};

const FullscreenTemplate = (args) => <FullscreenIcon {...args} />;

export const Fullscreen = FullscreenTemplate.bind({});
Fullscreen.args = {
	size: 's', // Default size
	color: 'slate', // Default color
};

const SendTemplate = (args) => <SendIcon {...args} />;

export const Send = SendTemplate.bind({});
Send.args = {
	size: 's', // Default size
	color: 'slate', // Default color
}; */

import React from 'react';
import CheckIcon from './check';
import CancelIcon from './cancel';
import RepostIcon from './repost';
import TimeIcon from './time';
import MumbleIcon from './mumble';
import FullscreenIcon from './fullscreen';
import SendIcon from './send';
import EditIcon from './edit'; // Import your EditIcon component
import LocationIcon from './location'; // Import LocationIcon
import ShareIcon from './share'; // Import ShareIcon
import ProfileIcon from './profile'; // Import ProfileIcon
import EyeIcon from './eye'; // Import EyeIcon
import SettingsIcon from './settings'; // Import SettingsIcon
import LogoutIcon from './logout'; // Import LogoutIcon
import CalendarIcon from './calendar'; // Import CalendarIcon

export default {
  title: 'Components/Icons',
  component: CheckIcon,
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    color: {
      options: ['slate', 'white'],
      control: { type: 'radio' },
    },
  },
};

const CheckTemplate = (args) => <CheckIcon {...args} />;
const CancelTemplate = (args) => <CancelIcon {...args} />;
const RepostTemplate = (args) => <RepostIcon {...args} />;
const TimeTemplate = (args) => <TimeIcon {...args} />;
const MumbleTemplate = (args) => <MumbleIcon {...args} />;
const FullscreenTemplate = (args) => <FullscreenIcon {...args} />;
const SendTemplate = (args) => <SendIcon {...args} />;
const EditTemplate = (args) => <EditIcon {...args} />;
const LocationTemplate = (args) => <LocationIcon {...args} />;
const ShareTemplate = (args) => <ShareIcon {...args} />;
const ProfileTemplate = (args) => <ProfileIcon {...args} />;
const EyeTemplate = (args) => <EyeIcon {...args} />;
const SettingsTemplate = (args) => <SettingsIcon {...args} />;
const LogoutTemplate = (args) => <LogoutIcon {...args} />;
const CalendarTemplate = (args) => <CalendarIcon {...args} />;

export const Checkmark = CheckTemplate.bind({});
export const Cancel = CancelTemplate.bind({});
export const Repost = RepostTemplate.bind({});
export const Time = TimeTemplate.bind({});
export const Mumble = MumbleTemplate.bind({});
export const Fullscreen = FullscreenTemplate.bind({});
export const Send = SendTemplate.bind({});
export const Edit = EditTemplate.bind({});
export const Location = LocationTemplate.bind({});
export const Share = ShareTemplate.bind({});
export const Profile = ProfileTemplate.bind({});
export const Eye = EyeTemplate.bind({});
export const Settings = SettingsTemplate.bind({});
export const Logout = LogoutTemplate.bind({});
export const Calendar = CalendarTemplate.bind({});

// Set default args for all components
Checkmark.args = {
  size: 's',
  color: 'slate',
};
Cancel.args = {
  size: 's',
  color: 'slate',
};
Repost.args = {
  size: 's',
  color: 'slate',
};
Time.args = {
  size: 's',
  color: 'slate',
};
Mumble.args = {
  size: 's',
  color: 'slate',
};
Fullscreen.args = {
  size: 's',
  color: 'slate',
};
Send.args = {
  size: 's',
  color: 'slate',
};
Edit.args = {
  size: 's',
  color: 'slate',
};
Location.args = {
  size: 's',
  color: 'slate',
};
Share.args = {
  size: 's',
  color: 'slate',
};
Profile.args = {
  size: 's',
  color: 'slate',
};
Eye.args = {
  size: 's',
  color: 'slate',
};
Settings.args = {
  size: 's',
  color: 'slate',
};
Logout.args = {
  size: 's',
  color: 'slate',
};
Calendar.args = {
  size: 's',
  color: 'slate',
};
