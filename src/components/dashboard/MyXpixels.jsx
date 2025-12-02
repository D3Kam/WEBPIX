import React, { useEffect, useState } from 'react';
import { userAPI } from '../../services/api';
import { Grid, Search, Calendar, Coins } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function MyXpixels() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchXpixels = async () => {
      try {
        const data = await userAPI.getStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch Xpixels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchXpixels();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
          <p className="text-neutral-dark">Loading your Xpixels...</p>
        </div>
      </div>
    );
  }

  const xpixels = stats?.xpixels || [];

  // Filter Xpixels based on search term
  const filteredXpixels = xpixels.filter((pixel) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      pixel.coordinate_x.toString().includes(searchLower) ||
      pixel.coordinate_y.toString().includes(searchLower) ||
      `${pixel.coordinate_x},${pixel.coordinate_y}`.includes(searchLower)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-scheme-text">My Xpixels</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10">
              <Grid className="h-6 w-6 text-brand-primary" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-neutral-dark">Total Xpixels</p>
              <p className="text-2xl font-bold text-scheme-text">{stats?.totalXpixels || 0}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
              <Coins className="h-6 w-6 text-brand-blue" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-neutral-dark">Token Share</p>
              <p className="text-2xl font-bold text-scheme-text">
                {(stats?.totalTokenShare || 0).toFixed(6)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10">
              <Calendar className="h-6 w-6 text-brand-orange" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-neutral-dark">Latest Purchase</p>
              <p className="text-sm font-medium text-scheme-text">
                {xpixels.length > 0
                  ? new Date(xpixels[0].purchase_date).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {xpixels.length > 0 && (
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-dark" />
            <Input
              type="text"
              placeholder="Search by coordinates (e.g., 100,200)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      )}

      {/* Xpixels list */}
      {filteredXpixels.length > 0 ? (
        <div className="rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead className="bg-neutral-lightest">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-dark">
                    Pixel ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-dark">
                    Coordinates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-dark">
                    Token Share
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-dark">
                    Purchase Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-light bg-white">
                {filteredXpixels.map((pixel) => (
                  <tr key={pixel.id} className="hover:bg-neutral-lightest transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-scheme-text">
                      #{pixel.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-primary/10">
                          <Grid className="h-4 w-4 text-brand-primary" />
                        </div>
                        <span className="ml-2 font-mono text-sm text-scheme-text">
                          ({pixel.coordinate_x}, {pixel.coordinate_y})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-scheme-text">
                      <div className="flex items-center">
                        <Coins className="mr-1 h-4 w-4 text-brand-blue" />
                        {pixel.token_share}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-dark">
                      {new Date(pixel.purchase_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination info */}
          <div className="border-t border-neutral-light bg-neutral-lightest px-6 py-3">
            <p className="text-sm text-neutral-dark">
              Showing {filteredXpixels.length} of {xpixels.length} Xpixels
            </p>
          </div>
        </div>
      ) : xpixels.length > 0 ? (
        <div className="rounded-lg bg-white p-12 text-center shadow-sm">
          <Search className="mx-auto mb-4 h-16 w-16 text-neutral-light" />
          <h3 className="mb-2 text-xl font-bold text-scheme-text">No results found</h3>
          <p className="text-neutral-dark">
            Try adjusting your search term
          </p>
        </div>
      ) : (
        <div className="rounded-lg bg-white p-12 text-center shadow-sm">
          <Grid className="mx-auto mb-4 h-16 w-16 text-neutral-light" />
          <h3 className="mb-2 text-xl font-bold text-scheme-text">No Xpixels Yet</h3>
          <p className="mb-6 text-neutral-dark">
            You haven't purchased any Xpixels yet. Start building your digital presence!
          </p>
          <a
            href="/xframe"
            className="inline-block rounded-lg bg-brand-primary px-6 py-3 font-medium text-white hover:bg-brand-primary/90"
          >
            Browse Available Xpixels
          </a>
        </div>
      )}
    </div>
  );
}
