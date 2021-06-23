import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "globant-bootcamp92",
  api_key: "537112258364189",
  api_secret: "3Ky1qZYz0TRUAvLkruVp7Mp5v_E",
});

describe("Test for uploading files", () => {
  test("should upload a file and return the url", async () => {
    jest.setTimeout(20000);
    const response = await fetch(
      "https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png"
    );
    const blob = await response.blob();
    const file = new File([blob], "image.png");
    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    //delete image uploaded
    const segments = url.split("/");
    const imageID = segments[segments.length - 1].replace(".png", "");
    cloudinary.v2.api.delete_resources(imageID, {}, () => {
    });
  });

  test("should return an error", async () => {
    const file = new File([], "image.png");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
