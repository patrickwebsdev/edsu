type Props = {
	className: string;
};

const ArrowLeftSVG = ({ className }: Props) => {
	return (
		<svg
			strokeWidth='0'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path d='M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13Z'></path>
		</svg>
	);
};
export default ArrowLeftSVG;
