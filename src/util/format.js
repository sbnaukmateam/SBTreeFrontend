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
