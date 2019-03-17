export const formatData = (data, messages) => {
  const {
    result, loading,
    initial, error,
  } = data || {};
  const {
    loading: messageLoading,
    initial: messageInitial,
  } = messages || {};
  if (initial) {
    return messageInitial;
  }
  if (loading) {
    return messageLoading;
  }
  if (error) {
    return error;
  }
  return result;
};

export const formatProfileS2C = (profile) => {
  const {
    phones, emails, profiles, ...rest
  } = profile;
  const contacts = [
    ...(phones || []).map(item => ({ item, type: 'phone' })),
    ...(emails || []).map(item => ({ item, type: 'email' })),
    ...(profiles || []).map(item => ({ item, type: 'profile' })),
  ];
  return { ...rest, contacts };
};

export const formatProfileC2S = (profile) => {
  const { contacts, ...rest } = profile;
  const phones = (contacts || []).filter(({ type }) => type === 'phone').map(({ item }) => item);
  const emails = (contacts || []).filter(({ type }) => type === 'email').map(({ item }) => item);
  const profiles = (contacts || []).filter(({ type }) => type === 'profile').map(({ item }) => item);
  return {
    ...rest, phones, emails, profiles,
  };
};

export const formatDegree = ({
  faculty, year, speciality, program,
}) => `${faculty} - ${year} (${speciality}, ${program})`;

export const formatPosition = ({ years, name }) => `${name} - ${years.join(', ')}`;
