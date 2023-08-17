type Props = {
	className: string;
};

const ArrowRightSVG = ({ className }: Props) => {
	return (
		<svg
			strokeWidth='0'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path d='m6.49 20.13 1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13Z'></path>
		</svg>
	);
};
export default ArrowRightSVG;
