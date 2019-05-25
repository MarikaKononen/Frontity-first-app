const productionConfig = merge([
    ...
  
    parts.loadImages({
      options: {
        limit: 15000,
        name: "[name].[ext]",
      },
    }),
  
  ]);
  
  const developmentConfig = merge([
    ...
  
    parts.loadImages(),
  
  ]);