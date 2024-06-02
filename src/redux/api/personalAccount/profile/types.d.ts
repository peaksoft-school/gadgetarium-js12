namespace PROFILESTORE {
  type IProfile = {
    oldPassword: string;
    newPassword: string;
    confirmationPassword: string;
  }

  type IInformation = {
    userName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
  }

  type IImage = {
    image: string;
  }

  type PostProfilePasswordResponse = IProfile[];
  type PostProfilePasswordRequest = IProfile;
  
  type PostProfileInformationResponse = IInformation[];
  type PostProfileInformationRequest = IInformation;

  type PutProfileImageResponse = IImage;
  type PutProfileImageRequest = IImage;
}