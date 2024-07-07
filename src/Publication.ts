export default interface Publication {
	authors: string;
	year: number;
	title: string;
	journal: string;
	url: string;
	topic: string;
	note?: string;
	pdfName?: string;
}
