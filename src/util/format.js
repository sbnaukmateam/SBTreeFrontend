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
    phones, emails, profiles, positions: rawPositions, degrees: rawDegrees, ...rest
  } = profile || {};
  const contacts = [
    ...(phones || []).map(item => ({ item, type: 'phone' })),
    ...(emails || []).map(item => ({ item, type: 'email' })),
    ...(profiles || []).map(item => ({ item, type: 'profile' })),
  ];
  const positions = (rawPositions || []).map(item => ({ item, type: 'position' }));
  const degrees = (rawDegrees || []).map(item => ({ item, type: 'position' }));
  return {
    ...rest, contacts, positions, degrees,
  };
};

export const formatProfileC2S = (profile) => {
  const {
    contacts, rawDegrees, rawPositions, ...rest
  } = profile || {};
  const phones = (contacts || []).filter(({ type }) => type === 'phone').map(({ item }) => item);
  const emails = (contacts || []).filter(({ type }) => type === 'email').map(({ item }) => item);
  const profiles = (contacts || []).filter(({ type }) => type === 'profile').map(({ item }) => item);
  const degrees = (rawDegrees || []).map(({ item }) => item);
  const positions = (rawPositions || []).map(({ item }) => item);
  return {
    ...rest, phones, emails, profiles, degrees, positions,
  };
};


export const DATE_FORMAT = 'YYYY-MM-DD';

export const formatPosition = ({ years, name }) => `${name} - ${(years || []).join(', ')}`;
