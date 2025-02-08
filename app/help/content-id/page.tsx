import { Metadata } from 'next';
import ContentIdPageClient from './ContentIdPageClient';

export const metadata: Metadata = {
  title: 'Content ID Guide | No Copyright Gaming Music',
  description: 'Learn how to handle Content ID claims and protect your content when using No Copyright Gaming Music.',
};

export default function ContentIdPage() {
  return <ContentIdPageClient />;
} 