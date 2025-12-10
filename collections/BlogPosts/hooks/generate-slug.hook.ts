import { BlogPost } from '@/payload-types';
import { FieldHook } from 'payload';
import { slugify } from 'payload/shared';

export const generateSlugHook: FieldHook<BlogPost, string> = ({
    value,
    data,
}) => {
    if (value) return slugify(value.trim()) || '';
    return slugify(data?.title?.trim() || '') || '';
};
