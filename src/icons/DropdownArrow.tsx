type ArrowProp = {
	open?: boolean;
};

const DropdownArrow = ({ open }: ArrowProp) => {
	return (
		<svg
			stroke='currentColor'
			fill='none'
			strokeWidth='2'
			viewBox='0 0 24 24'
			aria-hidden='true'
			className={`h-4 w-4 ${open ? 'transform rotate-180' : ''}`}
			height='1em'
			width='1em'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M19 9l-7 7-7-7'
			></path>
		</svg>
	);
};
export default DropdownArrow;
