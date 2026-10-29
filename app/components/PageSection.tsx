import type { ReactNode } from "react";

type PageSectionProps = {
	children: ReactNode;
  id?: string;
	className?: string;
};

export default function PageSection({ children, id, className }: PageSectionProps) {
	return <section id={id} className={"px-5 " + className}>
		{children}
	</section>;
}

