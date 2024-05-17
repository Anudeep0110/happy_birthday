import os

def rename_images(folder_path):
    # Get list of image files in the folder
    image_files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))
                   and f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

    # Iterate through each image file and rename
    for i, image_file in enumerate(image_files):
        # Generate new filename
        new_filename = f"img{i+1}{os.path.splitext(image_file)[1]}"
        
        # Rename the file
        os.rename(os.path.join(folder_path, image_file), os.path.join(folder_path, new_filename))
        print(f"Renamed {image_file} to {new_filename}")

# Provide the folder path containing the images
folder_path = "D:/Desktop/React/happy_birthday/public/assets/"

# Call the function to rename images
rename_images(folder_path)
