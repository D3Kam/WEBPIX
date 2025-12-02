import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { userAPI } from '../../services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, User, MapPin, Phone, Wallet, Calendar } from 'lucide-react';

export default function MyInformation() {
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    walletAddress: user?.wallet_address || '',
    livingAddress: user?.living_address || '',
    phoneNumber: user?.phone_number || '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate wallet address if provided
    if (formData.walletAddress && !/^0x[a-fA-F0-9]{40}$/.test(formData.walletAddress)) {
      setError('Invalid ERC-20 wallet address format');
      return;
    }

    setLoading(true);

    try {
      const response = await userAPI.updateProfile(formData);
      updateUser(response.user);
      setSuccess('Profile updated successfully!');
      setEditing(false);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      walletAddress: user?.wallet_address || '',
      livingAddress: user?.living_address || '',
      phoneNumber: user?.phone_number || '',
    });
    setEditing(false);
    setError('');
  };

  const infoItems = [
    {
      icon: User,
      label: 'Full Name',
      value: `${user?.name} ${user?.surname}`,
      editable: false,
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: user?.email,
      editable: false,
    },
    {
      icon: Wallet,
      label: 'ERC-20 Wallet Address',
      value: formData.walletAddress || 'Not provided',
      name: 'walletAddress',
      editable: true,
      placeholder: '0x...',
      type: 'text',
    },
    {
      icon: MapPin,
      label: 'Living Address',
      value: formData.livingAddress || 'Not provided',
      name: 'livingAddress',
      editable: true,
      placeholder: '123 Main St, City, Country',
      type: 'text',
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: formData.phoneNumber || 'Not provided',
      name: 'phoneNumber',
      editable: true,
      placeholder: '+1 234 567 8900',
      type: 'tel',
    },
    {
      icon: Calendar,
      label: 'Member Since',
      value: new Date(user?.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      editable: false,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-scheme-text">My Information</h2>
            <p className="mt-1 text-sm text-neutral-dark">
              Manage your personal information and settings
            </p>
          </div>
          {!editing && (
            <Button
              onClick={() => setEditing(true)}
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Success message */}
      {success && (
        <div className="rounded-lg border border-brand-primary bg-brand-primary/10 p-4 text-brand-primary">
          {success}
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="rounded-lg border border-brand-red bg-brand-red/10 p-4 text-brand-red">
          {error}
        </div>
      )}

      {/* Information form */}
      <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-sm">
        <div className="space-y-6">
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start border-b border-neutral-lightest pb-6 last:border-b-0 last:pb-0">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <Icon className="h-5 w-5 text-brand-primary" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-neutral-dark">{item.label}</p>
                  {editing && item.editable ? (
                    <Input
                      name={item.name}
                      type={item.type}
                      value={formData[item.name]}
                      onChange={handleChange}
                      placeholder={item.placeholder}
                      className="mt-2 w-full"
                    />
                  ) : (
                    <p className={`mt-1 text-base ${item.editable && !item.value.includes('Not provided') ? 'font-mono text-sm' : ''} text-scheme-text`}>
                      {editing ? item.value : (formData[item.name] || item.value)}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {editing && (
          <div className="mt-6 flex gap-3">
            <Button
              type="submit"
              disabled={loading}
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button
              type="button"
              onClick={handleCancel}
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        )}
      </form>

      {/* Authentication method */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-scheme-text">Authentication</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-scheme-text">Sign-in Method</p>
            <p className="mt-1 text-sm text-neutral-dark capitalize">
              {user?.auth_provider === 'google' ? 'Google OAuth' : 'Email & Password'}
            </p>
          </div>
          <div className={`rounded-full px-3 py-1 text-xs font-medium ${
            user?.is_verified
              ? 'bg-brand-primary/10 text-brand-primary'
              : 'bg-neutral-light text-neutral-dark'
          }`}>
            {user?.is_verified ? 'Verified' : 'Not Verified'}
          </div>
        </div>
      </div>
    </div>
  );
}
