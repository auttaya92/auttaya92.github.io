<template>
  <v-row justify="center" align="center">
    <v-col>
      <div class="text-right mb-3">
        <v-spacer></v-spacer>
        <v-btn depressed color="primary" @click="dialog = true">
          add content
        </v-btn>
      </div>
      <v-card>
        <v-card-title>
          Management contents
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="contents" :search="search">
          <template v-slot:[`item.image`]="{ item }">
            <v-img
              contain
              max-height="110"
              max-width="116"
              :src="item.imageUrl"
            ></v-img>
          </template>
          <template v-slot:[`item.link`]="{ item }">
            <v-btn rounded color="primary" dark @click="openLink(item)">
              link
            </v-btn>
          </template>
          <template v-slot:[`item.delete`]>
            <v-btn rounded color="error" dark> Delete </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">ADD CONTENT</span>
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Ttitle"
                    v-model="title"
                    :rules="[(v) => !!v || 'Title is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    counter
                    label="Subtitle"
                    auto-grow
                    outlined
                    rows="4"
                    row-height="30"
                    shaped
                    v-model="subtitle"
                    :rules="rules"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Link website"
                    v-model="link"
                    :rules="[(v) => !!v || 'link is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="files"
                    accept="image/png, image/jpeg, image/bmp"
                    :rules="rulesImage"
                    placeholder="Pick an Image"
                    prepend-icon="mdi-camera"
                    label="Image"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="handleSaveData">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      valid: true,
      title: '',
      link: '',
      subtitle: '',
      files: [],
      imageUrl: '',
      rules: [
        (v) => !!v || 'subtitle is required',
        (v) => (v && v.length <= 250) || 'Max 250 characters',
      ],
      rulesImage: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          'Avatar size should be less than 2 MB!',
      ],
      dialog: false,
      search: '',
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        {
          text: 'Subtitle',
          align: 'start',
          value: 'subtitle',
        },
        {
          text: 'Image',
          align: 'center',
          value: 'image',
        },
        {
          text: 'Link',
          align: 'center',
          value: 'link',
        },
        {
          text: 'Action ',
          align: 'center',
          value: 'delete',
        },
      ],
      contents: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    closeDialog() {
      this.$refs.form.reset()
      this.dialog = false
    },
    openLink(item) {
      console.warn('item', item)
      window.open(item.link_post, '_blank')
    },
    handleSaveData() {
      console.warn('files', this.files)
      if (this.$refs.form.validate()) {
        if (this.files.name) {
          this.uploadImageFile(this.files)
          this.dialog = false
        }
      }
    },
    uploadImageFile(files) {
      if (!files.type.match('image.*')) {
        alert('Please upload an image.')
        return
      }

      const metadata = {
        contentType: files.type,
      }

      // Create a reference to the destination where we're uploading
      // the file.

      this.$fire.storage
        .ref(`images/${files.name}`)
        .put(files, metadata)
        .then((snapshot) => {
          // Once the image is uploaded, obtain the download URL, which
          // is the publicly accessible URL of the image.
          console.warn('snapshot', snapshot)
          snapshot.ref.getDownloadURL().then((url) => {
            this.imageUrl = url
            console.warn('url', url)
            console.warn('this.imageUrl', this.imageUrl)
            this.saveDataFirebase()
          })
        })
        .catch((error) => {
          console.error('Error uploading image', error)
        })
    },
    async saveDataFirebase() {
      const submit = await this.$fire.database
        .ref('content')
        .push({
          title: this.title,
          subtitle: this.subtitle,
          imageUrl: this.imageUrl,
          link_post: this.link,
        })
        .catch((error) => console.log(error.code, error.message))

      console.warn('submit', submit)
    },
    async getData() {
      const self = this
      const getcontents = await this.$fire.database
        .ref('content/')
        .once('value', function (snapshot) {
          console.log(snapshot.val())
          const data = snapshot.val()
          const itemData = Object.values(data)
          self.contents = itemData
          console.warn('itemData', itemData)
        })
        .catch((error) => console.log(error.message))
      console.warn('getcontents', getcontents)
      //
    },
  },
}
</script>
