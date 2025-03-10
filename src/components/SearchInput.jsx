import React from 'react';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className='relative w-full'>
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
      <Input
        type='text'
        placeholder='Cari project'
        value={value}
        onChange={onChange}
        className='bg-primary-foreground w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-foreground transition-none'
      />
    </div>
  );
};

export default SearchInput;
