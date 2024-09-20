type Props = {
  className: string;
};

const CloseSVG = ({ className }: Props) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 17.94 6M18 18 6.06 6" />
    </svg>
  );
};
export default CloseSVG;
