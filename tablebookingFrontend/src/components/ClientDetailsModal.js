import clientDetails from "./client/ClientDetails";
import clientForm from "./client/ClientForm";
import confirmationModal from "./ConfirmationModal";

export default {
    template: `
    <div id="clientInfoModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Show Form if Editing -->
                    <client-form 
                        v-if="isEditing" 
                        v-model:id="modifiedClient.id" 
                        v-model:name="modifiedClient.name"
                        v-model:email="modifiedClient.email"
                        v-model:phone="modifiedClient.phone"
                        v-model:address="modifiedClient.address"
                    ></client-form>

                    <!-- Show Details if Not Editing -->
                    <client-details 
                        v-else 
                        :clientInModal="clientInModal">
                    </client-details>
                </div>
                <div class="modal-footer">
                    <div class="container">
                        <div class="row">
                            <!-- Editing Mode Buttons -->
                            <template v-if="isEditing">
                                <div class="col me-auto">
                                    <button 
                                        type="button" 
                                        class="btn btn-danger" 
                                        data-bs-target="#confirmationModal" 
                                        data-bs-toggle="modal"
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div class="col-auto">
                                    <button 
                                        type="button" 
                                        class="btn btn-success mx-2" 
                                        @click="saveModifiedClient"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-secondary" 
                                        @click="cancelEditing"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </template>

                            <!-- View Mode Buttons -->
                            <template v-else>
                                <div class="col me-auto"></div>
                                <div class="col-auto">
                                    <button 
                                        type="button" 
                                        class="btn btn-warning mx-2" 
                                        @click="startEditing"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-secondary" 
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Confirmation Modal -->
    <confirmation-modal 
        :target="'clientInfoModal'" 
        @confirmed="deleteClient"
    ></confirmation-modal>
    `,
    components: {
        clientDetails,
        clientForm,
        confirmationModal
    },
    emits: ["clientUpdated"],
    props: {
        clientInModal: { type: Object, required: true }
    },
    data() {
        return {
            isEditing: false,
            modifiedClient: {}
        };
    },
    methods: {
        startEditing() {
            // Deep copy to avoid live updates while editing
            this.modifiedClient = { ...this.clientInModal };
            this.isEditing = true;
        },
        cancelEditing() {
            // Revert editing state
            this.isEditing = false;
            this.modifiedClient = {};
        },
        async saveModifiedClient() {
            try {
                console.log("Saving: ", this.modifiedClient);

                const response = await fetch(`http://localhost:8080/clients/${this.modifiedClient.id}`, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.modifiedClient)
                });

                if (!response.ok) {
                    throw new Error(`Failed to save client: ${response.statusText}`);
                }

                const updatedClient = await response.json();
                console.log("Client updated successfully:", updatedClient);

                this.$emit("clientUpdated", updatedClient); // Notify parent
                this.isEditing = false;
            } catch (error) {
                console.error("Error saving client:", error);
                alert("Failed to save client. Please try again.");
            }
        },
        async deleteClient() {
            try {
                console.log("Deleting client with ID:", this.clientInModal.id);

                const response = await fetch(`http://localhost:8080/clients/${this.clientInModal.id}`, {
                    method: "DELETE"
                });

                if (!response.ok) {
                    throw new Error(`Failed to delete client: ${response.statusText}`);
                }

                console.log("Client deleted successfully.");
                this.$emit("clientUpdated", null); // Notify parent about deletion
            } catch (error) {
                console.error("Error deleting client:", error);
                alert("Failed to delete client. Please try again.");
            }
        }
    }
};
