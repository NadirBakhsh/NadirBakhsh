import { LucideProps } from "lucide-react";

export const Icons = {
	Logo: (props: LucideProps) => (
		<svg {...props} width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.7351C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z" fill="black"/>
		<path d="M13.9992 14.2582C15.1294 13.128 15.1294 11.2956 13.9992 10.1654C12.8689 9.03515 11.0365 9.03515 9.90629 10.1654C8.77608 11.2956 8.77608 13.128 9.90629 14.2582C11.0365 15.3884 12.8689 15.3884 13.9992 14.2582Z" fill="black"/>
		</svg>
		
	),
	Download: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Star: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.99994 14.3916L13.4583 16.4833C14.0916 16.8666 14.8666 16.3 14.6999 15.5833L13.7833 11.65L16.8416 8.99997C17.3999 8.51663 17.0999 7.59997 16.3666 7.54163L12.3416 7.19997L10.7666 3.4833C10.4833 2.8083 9.5166 2.8083 9.23327 3.4833L7.65827 7.19163L3.63327 7.5333C2.89994 7.59163 2.59994 8.5083 3.15827 8.99163L6.2166 11.6416L5.29994 15.575C5.13327 16.2916 5.90827 16.8583 6.5416 16.475L9.99994 14.3916Z"
				fill="black"
			/>
		</svg>
	),
	BeIcon: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.49101 4.50292C6.94135 4.49455 7.39104 4.54072 7.83029 4.64042C8.20011 4.72116 8.55123 4.87141 8.86499 5.08317C9.15477 5.29375 9.38405 5.57686 9.52981 5.90406C9.69734 6.30642 9.77816 6.73957 9.76701 7.17527C9.78603 7.65367 9.66385 8.1271 9.41569 8.53654C9.15462 8.92325 8.79375 9.23209 8.37136 9.43031C8.94457 9.58484 9.44384 9.93882 9.77938 10.4286C10.1015 10.9475 10.2634 11.5499 10.2448 12.1604C10.2555 12.6472 10.1548 13.1299 9.95057 13.5719C9.76179 13.9574 9.48536 14.2934 9.14343 14.553C8.7914 14.8096 8.39525 14.9996 7.97466 15.1133C7.53851 15.2339 7.08793 15.2945 6.63539 15.2934H1.66675V4.50292H6.49101ZM6.20432 8.86724C6.55816 8.88182 6.90647 8.7759 7.19228 8.56679C7.32915 8.44494 7.43563 8.29276 7.5032 8.12241C7.57077 7.95206 7.59755 7.76826 7.58141 7.58572C7.59057 7.37251 7.54811 7.16024 7.45766 6.96696C7.38092 6.81306 7.26161 6.68444 7.1139 6.59639C6.96429 6.49946 6.79621 6.43461 6.62027 6.40595C6.42937 6.36897 6.23511 6.35214 6.04069 6.35576H3.91766V8.87686H6.20432V8.86724ZM6.32807 13.4612C6.54206 13.4641 6.7556 13.441 6.96402 13.3924C7.15449 13.3504 7.33512 13.2722 7.49616 13.1621C7.65391 13.0521 7.78137 12.9041 7.86672 12.7317C7.9657 12.512 8.01117 12.2719 7.99941 12.0312C8.02087 11.8118 7.99182 11.5904 7.91447 11.384C7.83713 11.1776 7.71356 10.9916 7.55322 10.8404C7.21338 10.5901 6.79692 10.4661 6.37551 10.4898H3.91766V13.4612H6.32807Z"
				fill="black"
			/>
			<path
				d="M13.4507 13.4212C13.6273 13.585 13.8355 13.7111 14.0624 13.792C14.2893 13.8728 14.5303 13.9067 14.7707 13.8915C15.1518 13.9011 15.5255 13.7852 15.8343 13.5615C16.0854 13.3982 16.2756 13.1565 16.3753 12.874H18.1704C17.9792 13.6782 17.5121 14.3901 16.8504 14.8856C16.2156 15.307 15.4655 15.5203 14.704 15.4961C14.1605 15.5033 13.6211 15.4011 13.1179 15.1957C12.6627 15.0059 12.2544 14.7189 11.9216 14.3549C11.5901 13.9734 11.3354 13.5315 11.1716 13.0534C10.9877 12.519 10.8976 11.9568 10.9055 11.3917C10.9022 10.8361 10.9952 10.2841 11.1805 9.76024C11.4295 9.0233 11.9055 8.38418 12.5402 7.93458C13.175 7.48498 13.9358 7.24802 14.7136 7.2577C15.2879 7.24569 15.8557 7.38008 16.3637 7.6482C16.8228 7.89997 17.2189 8.25257 17.5221 8.67947C17.8323 9.12742 18.0546 9.63018 18.1773 10.1611C18.3118 10.7311 18.3598 11.3182 18.3196 11.9025H12.9729C12.9295 12.4515 13.1008 12.9959 13.4507 13.4212ZM15.7965 9.31748C15.6468 9.16782 15.4669 9.05197 15.2687 8.97773C15.0705 8.90349 14.8588 8.87259 14.6476 8.8871C14.3675 8.87642 14.0895 8.93848 13.8405 9.06723C13.6431 9.17589 13.4689 9.32209 13.3276 9.49761C13.2024 9.66217 13.1091 9.84872 13.0526 10.0476C13.0017 10.2135 12.9698 10.3847 12.9577 10.5578H16.2695C16.2406 10.1065 16.0762 9.67447 15.7978 9.31817L15.7965 9.31748Z"
				fill="black"
			/>
			<path
				d="M16.6806 5.22339H12.5308V6.28422H16.6806V5.22339Z"
				fill="black"
			/>
		</svg>
	),
	LinkedIn: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.5 3.60294V16.3971C17.5 16.6896 17.3838 16.9701 17.177 17.177C16.9701 17.3838 16.6896 17.5 16.3971 17.5H3.60294C3.31042 17.5 3.02989 17.3838 2.82304 17.177C2.6162 16.9701 2.5 16.6896 2.5 16.3971V3.60294C2.5 3.31042 2.6162 3.02989 2.82304 2.82304C3.02989 2.6162 3.31042 2.5 3.60294 2.5H16.3971C16.6896 2.5 16.9701 2.6162 17.177 2.82304C17.3838 3.02989 17.5 3.31042 17.5 3.60294ZM6.91176 8.23529H4.70588V15.2941H6.91176V8.23529ZM7.11029 5.80882C7.11146 5.64197 7.07974 5.47651 7.01696 5.32191C6.95418 5.16731 6.86156 5.02659 6.7444 4.90779C6.62723 4.78898 6.48781 4.69442 6.3341 4.6295C6.18038 4.56458 6.01539 4.53057 5.84853 4.52941H5.80882C5.4695 4.52941 5.14408 4.66421 4.90414 4.90414C4.66421 5.14408 4.52941 5.4695 4.52941 5.80882C4.52941 6.14814 4.66421 6.47357 4.90414 6.7135C5.14408 6.95344 5.4695 7.08824 5.80882 7.08824C5.97569 7.09234 6.14173 7.06353 6.29746 7.00344C6.45319 6.94335 6.59555 6.85317 6.71642 6.73804C6.83728 6.62291 6.93427 6.4851 7.00186 6.33247C7.06944 6.17985 7.10629 6.0154 7.11029 5.84853V5.80882ZM15.2941 11.0059C15.2941 8.88382 13.9441 8.05882 12.6029 8.05882C12.1638 8.03684 11.7266 8.13037 11.3349 8.33009C10.9432 8.52981 10.6107 8.82874 10.3706 9.19706H10.3088V8.23529H8.23529V15.2941H10.4412V11.5397C10.4093 11.1552 10.5304 10.7736 10.7782 10.4779C11.026 10.1822 11.3805 9.99616 11.7647 9.96029H11.8485C12.55 9.96029 13.0706 10.4015 13.0706 11.5132V15.2941H15.2765L15.2941 11.0059Z"
				fill="black"
			/>
		</svg>
	),
	Facebook: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.3334 10.0505C18.3334 5.41996 14.6029 1.66663 10.0001 1.66663C5.3973 1.66663 1.66675 5.41996 1.66675 10.0505C1.66675 14.2361 4.71341 17.7044 8.69786 18.3333V12.4744H6.5823V10.05H8.69786V8.20329C8.69786 6.10218 9.94175 4.94107 11.8456 4.94107C12.7567 4.94107 13.7112 5.10496 13.7112 5.10496V7.16829H12.6595C11.6245 7.16829 11.3023 7.81496 11.3023 8.47829V10.0505H13.6134L13.244 12.4738H11.3023V18.3333C15.2867 17.7044 18.3334 14.2361 18.3334 10.0505Z"
				fill="black"
			/>
		</svg>
	),
	ArrowRight: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	),

	ArrowLeft: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.8335 10H5.00012M9.16678 5L4.75604 9.41074C4.4306 9.73618 4.4306 10.2638 4.75604 10.5893L9.16678 15"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	),
	ArrowDown: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 4.16663L10 15M15 10.8333L10.5893 15.244C10.2638 15.5695 9.73618 15.5695 9.41074 15.244L5 10.8333"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	),
	ArrowUp: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 15.8333L10 5M5 9.16666L9.41074 4.75592C9.73618 4.43048 10.2638 4.43048 10.5893 4.75592L15 9.16666"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	),

	ArrowTiled: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.87524 14.1248L13.5356 6.4645M7.05376 5.87524H13.2915C13.7517 5.87524 14.1248 6.24834 14.1248 6.70858V12.9463"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	),
	RedRabbit: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM15.2047 8.53799C16.0117 8.53799 16.6667 9.19296 16.6667 9.99998C16.6667 10.5965 16.3041 11.1111 15.8246 11.345C15.848 11.4854 15.8597 11.6257 15.8597 11.7778C15.8597 14.0234 13.2515 15.8362 10.0234 15.8362C6.79533 15.8362 4.18714 14.0234 4.18714 11.7778C4.18714 11.6257 4.19884 11.4737 4.22223 11.3333C3.70761 11.0994 3.35673 10.5965 3.35673 9.99998C3.35673 9.19296 4.0117 8.53799 4.81872 8.53799C5.20468 8.53799 5.56726 8.70173 5.82457 8.94735C6.83041 8.21051 8.22223 7.75437 9.77778 7.70758L10.5146 4.2222C10.538 4.15203 10.5731 4.09355 10.6316 4.05846C10.6901 4.02337 10.7602 4.01168 10.8304 4.02337L13.2515 4.53799C13.4152 4.18711 13.7661 3.9532 14.1754 3.9532C14.7485 3.9532 15.2164 4.42103 15.2164 4.99413C15.2164 5.56723 14.7485 6.03507 14.1754 6.03507C13.614 6.03507 13.1579 5.59062 13.1345 5.04092L10.9708 4.58478L10.3041 7.70758C11.8246 7.76606 13.2047 8.2339 14.1988 8.94735C14.4561 8.69004 14.807 8.53799 15.2047 8.53799ZM7.70761 9.99998C7.13451 9.99998 6.66667 10.4678 6.66667 11.0409C6.66667 11.614 7.13451 12.0819 7.70761 12.0819C8.28071 12.0819 8.74854 11.614 8.74854 11.0409C8.74854 10.4678 8.28071 9.99998 7.70761 9.99998ZM10.0117 14.5497C10.4094 14.5497 11.7661 14.5029 12.4795 13.7895C12.5848 13.6842 12.5848 13.5204 12.5029 13.4035C12.3977 13.2982 12.2222 13.2982 12.117 13.4035C11.6608 13.8479 10.7135 14.0117 10.0234 14.0117C9.33334 14.0117 8.37427 13.8479 7.92983 13.4035C7.82457 13.2982 7.64913 13.2982 7.54386 13.4035C7.4386 13.5088 7.4386 13.6842 7.54386 13.7895C8.24562 14.4912 9.61404 14.5497 10.0117 14.5497ZM11.2515 11.0409C11.2515 11.614 11.7193 12.0819 12.2924 12.0819C12.8655 12.0819 13.3333 11.614 13.3333 11.0409C13.3333 10.4678 12.8655 9.99998 12.2924 9.99998C11.7193 9.99998 11.2515 10.4678 11.2515 11.0409Z"
				fill="black"
			/>
		</svg>
	),

	Discord: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.23997 8.39001C7.66997 8.39001 7.21997 8.89001 7.21997 9.50001C7.21997 10.11 7.67997 10.61 8.23997 10.61C8.80997 10.61 9.25997 10.11 9.25997 9.50001C9.26997 8.89001 8.80997 8.39001 8.23997 8.39001ZM11.89 8.39001C11.32 8.39001 10.87 8.89001 10.87 9.50001C10.87 10.11 11.33 10.61 11.89 10.61C12.46 10.61 12.91 10.11 12.91 9.50001C12.91 8.89001 12.46 8.39001 11.89 8.39001Z"
				fill="black"
			/>
			<path
				d="M16.75 0H3.35005C2.22005 0 1.30005 0.92 1.30005 2.06V15.58C1.30005 16.72 2.22005 17.64 3.35005 17.64H14.69L14.16 15.79L15.44 16.98L16.65 18.1L18.8 20V2.06C18.8 0.92 17.88 0 16.75 0ZM12.89 13.06C12.89 13.06 12.53 12.63 12.23 12.25C13.54 11.88 14.04 11.06 14.04 11.06C13.63 11.33 13.24 11.52 12.89 11.65C12.39 11.86 11.91 12 11.44 12.08C10.48 12.26 9.60005 12.21 8.85005 12.07C8.28005 11.96 7.79005 11.8 7.38005 11.64C7.15005 11.55 6.90005 11.44 6.65005 11.3C6.62005 11.28 6.59005 11.27 6.56005 11.25C6.54005 11.24 6.53005 11.23 6.52005 11.22C6.34005 11.12 6.24005 11.05 6.24005 11.05C6.24005 11.05 6.72005 11.85 7.99005 12.23C7.69005 12.61 7.32005 13.06 7.32005 13.06C5.11005 12.99 4.27005 11.54 4.27005 11.54C4.27005 8.32 5.71005 5.71 5.71005 5.71C7.15005 4.63 8.52005 4.66 8.52005 4.66L8.62005 4.78C6.82005 5.3 5.99005 6.09 5.99005 6.09C5.99005 6.09 6.21005 5.97 6.58005 5.8C7.65005 5.33 8.50005 5.2 8.85005 5.17C8.91005 5.16 8.96005 5.15 9.02005 5.15C9.63005 5.07 10.32 5.05 11.04 5.13C11.99 5.24 13.01 5.52 14.05 6.09C14.05 6.09 13.26 5.34 11.5601 4.82L11.7 4.66C11.7 4.66 13.07 4.63 14.51 5.71C14.51 5.71 15.95 8.32 15.95 11.54C15.95 11.54 15.1 12.99 12.89 13.06Z"
				fill="black"
			/>
		</svg>
	),
	ShelledLock: (props: LucideProps) => (
		<svg
			{...props}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16 1.33337L4 6.66671V14.6667C4 22.0667 9.12 28.9867 16 30.6667C22.88 28.9867 28 22.0667 28 14.6667V6.66671L16 1.33337ZM16 9.33337C17.8667 9.33337 19.7333 10.8 19.7333 12.6667V14.6667C20.5333 14.6667 21.3333 15.4667 21.3333 16.4V21.0667C21.3333 21.8667 20.5333 22.6667 19.6 22.6667H12.2667C11.4667 22.6667 10.6667 21.8667 10.6667 20.9334V16.2667C10.6667 15.4667 11.4667 14.6667 12.2667 14.6667V12.6667C12.2667 10.8 14.1333 9.33337 16 9.33337ZM16 10.9334C14.9333 10.9334 14 11.6 14 12.6667V14.6667H18V12.6667C18 11.6 17.0667 10.9334 16 10.9334Z"
				fill="black"
			/>
		</svg>
	),

	DropDown: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 8.33337L8.58578 11.9192C9.36683 12.7002 10.6332 12.7002 11.4142 11.9192L15 8.33337"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	Hamburger: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="20" height="20" fill="white" />
			<path
				d="M2.5 15V13.3333H17.5V15H2.5ZM2.5 10.8333V9.16667H17.5V10.8333H2.5ZM2.5 6.66667V5H17.5V6.66667H2.5Z"
				fill="black"
			/>
		</svg>
	),
	Link: (props: LucideProps) => (
		<svg
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.8335 9.16671L17.6668 2.33337"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.3335 5.66663V1.66663H14.3335"
				stroke="#18181B"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
};
