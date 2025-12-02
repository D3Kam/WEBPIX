import React, { useEffect, useState } from 'react';
import { userAPI } from '../../services/api';
import { Grid, TrendingUp, Percent, Coins } from 'lucide-react';

export default function DashboardHome() {
  const [userStats, setUserStats] = useState(null);
  const [globalStats, setGlobalStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [user, global] = await Promise.all([
          userAPI.getStats(),
          userAPI.getGlobalStats(),
        ]);
        setUserStats(user);
        setGlobalStats(global);
      } catch (error) {
        console.error('Failed to fetch statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
          <p className="text-neutral-dark">Loading statistics...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'My Xpixels',
      value: userStats?.totalXpixels || 0,
      icon: Grid,
      color: 'bg-brand-primary',
      description: 'Total pixels owned',
    },
    {
      title: 'Token Share',
      value: `${(userStats?.totalTokenShare || 0).toFixed(6)}`,
      icon: Coins,
      color: 'bg-brand-blue',
      description: 'Your token holdings',
    },
    {
      title: 'Fill Percentage',
      value: `${globalStats?.fillPercentage?.toFixed(2) || 0}%`,
      icon: Percent,
      color: 'bg-brand-orange',
      description: 'Global canvas filled',
    },
    {
      title: 'Total Purchased',
      value: (globalStats?.totalXpixelsBought || 0).toLocaleString(),
      icon: TrendingUp,
      color: 'bg-brand-red',
      description: 'Pixels bought globally',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="rounded-lg bg-gradient-to-r from-brand-primary to-brand-blue p-8 text-white">
        <h2 className="mb-2 text-3xl font-bold">Your Xpixel Dashboard</h2>
        <p className="text-white/90">
          Track your pixel ownership and monitor the global canvas status
        </p>
      </div>

      {/* Statistics grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-dark">{stat.title}</p>
                    <p className="mt-2 text-3xl font-bold text-scheme-text">{stat.value}</p>
                    <p className="mt-1 text-xs text-neutral-dark">{stat.description}</p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Xpixels */}
      {userStats?.xpixels && userStats.xpixels.length > 0 && (
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-scheme-text">Recent Xpixels</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-light">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-dark uppercase">
                    Coordinates
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-dark uppercase">
                    Token Share
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-dark uppercase">
                    Purchase Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-light">
                {userStats.xpixels.slice(0, 5).map((pixel) => (
                  <tr key={pixel.id} className="hover:bg-neutral-lightest">
                    <td className="px-4 py-3 text-sm text-scheme-text">
                      ({pixel.coordinate_x}, {pixel.coordinate_y})
                    </td>
                    <td className="px-4 py-3 text-sm text-scheme-text">
                      {pixel.token_share}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-dark">
                      {new Date(pixel.purchase_date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {userStats.xpixels.length > 5 && (
            <div className="mt-4 text-center">
              <a
                href="/account/xpixels"
                className="text-sm font-medium text-brand-primary hover:text-brand-blue"
              >
                View all {userStats.xpixels.length} Xpixels →
              </a>
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {(!userStats?.xpixels || userStats.xpixels.length === 0) && (
        <div className="rounded-lg bg-white p-12 text-center shadow-sm">
          <Grid className="mx-auto mb-4 h-16 w-16 text-neutral-light" />
          <h3 className="mb-2 text-xl font-bold text-scheme-text">No Xpixels Yet</h3>
          <p className="mb-6 text-neutral-dark">
            Start owning your space on the digital canvas!
          </p>
          <a
            href="/xframe"
            className="inline-block rounded-lg bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90"
          >
            Browse Xpixels
          </a>
        </div>
      )}
    </div>
  );
}
