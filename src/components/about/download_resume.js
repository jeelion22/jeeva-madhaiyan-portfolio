export const downloadResume = async (resumeUrl) => {
  try {
    const fileIdMatch = resumeUrl.match(/\/d\/(.*?)\//);

    if (!fileIdMatch) {
      throw new Error("Invalid Google DRIVE URL");
    }

    const fileId = fileIdMatch[1];

    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // const response = await fetch(downloadUrl, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/pdf",
    //   },
    // });

    // if (!response.ok) {
    //   throw new Error("Failed to fetch resume file");
    // }

    // const blob = await response.blob();

    // const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = downloadUrl;

    link.download = "Jeeva_Madhaiyan_Resume.pdf";

    document.body.appendChild(link);

    link.click();

    link.remove();

    document.body.appendChild(link);

    // window.URL.revokeObjectURL(url);
  } catch (error) {
    alert("Download failed!");
    console.log(error);
  }
};
