import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';

export function getAuthServiceConfigs() {
  // @ts-ignore
  // @ts-ignore
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('425734756490-bhflhfe0rtrnls7t0hqr2ieeg8b8frr4.apps.googleusercontent.com')
    }
  ]);

  return config;
}
